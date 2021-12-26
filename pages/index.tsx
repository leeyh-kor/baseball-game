import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Layout from "../components/layout";
import { CheckAnswer } from "../utils/functions";

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  const [answer, setAnswer] = useState<string[]>();
  useEffect(() => {
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
  }, []);
  const [WrongAnswerList, SetWrongAnswerList] = useState<
    {
      answer: string;
      label: string;
    }[]
  >([]);
  const [value, setValue] = useState("");

  const onKeyUP = (e: any) => {
    if (e.keyCode === 13) {
      if (value.length === 3) {
        const label = CheckAnswer(answer!, value.split(""));
        if (label === "정답") {
          if (typeof window !== "undefined") {
            window.alert(
              `정답!! \n 도전횟수: ${WrongAnswerList.length}, 정답:${value}`,
            );
          }
        } else {
          SetWrongAnswerList(
            WrongAnswerList.concat([{ answer: value, label }]),
          );
        }
      } else {
        if (typeof window !== "undefined") {
          window.alert("3자리 숫자를 입력하세요");
        }
      }
    }
  };
  return (
    <Layout>
      {
        <div>
          <h2>추억의 숫자 야구 게임 정답{answer}</h2>
          <section>
            <input
              placeholder={"3자리 숫자를 입력해주세요"}
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={onKeyUP}
              value={value}
            />
            <button onClick={() => {}}>입력</button>
          </section>
          <section>
            <h3>오답 목록</h3>
            <ul>
              {WrongAnswerList.map((wrongAnswer, index) => (
                <li
                  key={"wronganswer" + wrongAnswer.answer}
                >{`input:${wrongAnswer.answer} result:${wrongAnswer.label}`}</li>
              ))}
            </ul>
          </section>
        </div>
      }
    </Layout>
  );
};

export default Home;
