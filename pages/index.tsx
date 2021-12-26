import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Layout from "../components/layout";
import WrongAnswerList from "../components/wrongAnswerList";
import { CheckAnswer } from "../utils/functions";

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  const [answer, setAnswer] = useState<string[]>();
  const [wrongAnswerList, SetWrongAnswerList] = useState<
    {
      answer: string;
      label: string;
    }[]
  >([]);
  const [value, setValue] = useState("");
  const [answerList, setAnswerList] = useState<
    { answer: string; count: number }[]
  >([]);

  const setRandomAnswer = () => {
    let randomIndexArray: string[] = [];
    while (true) {
      const randomNum = Math.floor(Math.random() * 10).toString();
      if (!randomIndexArray.includes(randomNum)) {
        randomIndexArray.push(randomNum);
      }
      if (randomIndexArray.length === 3) {
        break;
      }
    }
    setAnswer(randomIndexArray);
  };

  const resetGame = () => {
    if (typeof window !== "undefined") {
      window.alert(
        `정답!! \n 도전횟수: ${wrongAnswerList.length}, 정답:${value}`,
      );
      setAnswerList(
        answerList.concat({ answer: value, count: wrongAnswerList.length }),
      );
      SetWrongAnswerList([]);
      setRandomAnswer();
      setValue("");
    }
  };

  const getInput = () => {
    if (value.length === 3) {
      const label = CheckAnswer(answer!, value.split(""));
      if (label === "정답") {
        resetGame();
      } else {
        SetWrongAnswerList(wrongAnswerList.concat([{ answer: value, label }]));
      }
    } else {
      if (typeof window !== "undefined") {
        window.alert("3자리 숫자를 입력하세요");
      }
    }
  };

  const onKeyUP = (e: any) => {
    if (e.keyCode === 13) {
      getInput();
    }
  };

  useEffect(() => {
    setRandomAnswer();
  }, []);

  return (
    <Layout>
      {
        <Wrapper>
          <h2>추억의 숫자 야구 게임</h2>
          <section>
            <input
              placeholder={"3자리 숫자를 입력해주세요"}
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={onKeyUP}
              value={value}
            />
            <button
              onClick={() => {
                getInput();
              }}
            >
              입력
            </button>
          </section>
          <WrongAnswerList items={wrongAnswerList} />
          <section>
            <h3>정답 목록</h3>
            {answerList.map((ans, index) => (
              <div
                key={"answer" + index}
              >{`정답:${ans.answer} 시도횟수:${ans.count}`}</div>
            ))}
          </section>
        </Wrapper>
      }
    </Layout>
  );
};

export default Home;
