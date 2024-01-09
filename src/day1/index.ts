import { input } from "./input";

const regexNumbers = /[0-9]/;
const regexForward: RegExp = /(one|two|three|four|five|six|seven|eight|nine)/;
const regexBackward: RegExp = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/;

const stringToNumberConverter: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export const day1 = () => {
  const inputLineList = input.split("\n");

  let inputSum = 0;
  inputLineList.forEach((inputLine) => {
    inputSum += findFirstAndLastNumbers(inputLine);
  });
  console.log(inputSum);
};

const findFirstAndLastNumbers = (inputLine: string): number => {
  const completeForwardRegex: RegExp = new RegExp(
    regexNumbers.source + "|" + regexForward.source
  );

  const completeBackwardRegex: RegExp = new RegExp(
    regexNumbers.source + "|" + regexBackward.source
  );

  return (
    findFirstNumber(inputLine, completeForwardRegex) +
    findFirstNumber(reverseCode(inputLine), completeBackwardRegex)
  );
};

function reverseCode(codeToReverse: string) {
  return codeToReverse.split("").reverse().join("");
}

const findFirstNumber = (inputLine: string, regex: RegExp): number => {
  const firstNumber = inputLine.match(regex);
  return formatNumber(firstNumber ? firstNumber[0] : "");
};

const formatNumber = (sentNumber: string) => {
  if (!sentNumber) return 0;

  const convertedSentNumber = Number(sentNumber);
  if (typeof convertedSentNumber === "number") return convertedSentNumber;

  if (sentNumber.match(regexBackward)) {
    sentNumber = sentNumber.split("").reverse().join("");
  }

  return stringToNumberConverter[sentNumber];
};
