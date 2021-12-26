export const CheckAnswer = (
  answer: string[],
  inputNumber: string[],
): string => {
  if (answer.join() === inputNumber.join()) {
    return "정답";
  } else {
    let counts = { ball: 0, strike: 0, out: 0 };
    answer.forEach((ans, index) => {
      if (ans === inputNumber[index]) {
        counts.strike += 1;
      } else if (inputNumber.includes(ans)) {
        counts.ball += 1;
      } else {
        counts.out += 1;
      }
    });
    return `${counts.strike}Strike ${counts.ball}Ball ${counts.out}Out`;
  }
};
