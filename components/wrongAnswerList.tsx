interface Props {
  items: { answer: string; label: string }[];
}

const WrongAnswerList = ({ items }: Props) => {
  return (
    <section>
      <h3>오답 목록</h3>
      <ul>
        {items.map((wrongAnswer, index) => (
          <li
            key={"wronganswer" + wrongAnswer.answer}
          >{`input:${wrongAnswer.answer} result:${wrongAnswer.label}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default WrongAnswerList;
