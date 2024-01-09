"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day1 = void 0;
const input_1 = require("./input");
const regexNumbers = /[0-9]/;
const regexForward = /(one|two|three|four|five|six|seven|eight|nine)/;
const regexBackward = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/;
const stringToNumberConverter = {
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
const day1 = () => {
    const inputLineList = input_1.input.split("\n");
    let inputSum = 0;
    inputLineList.forEach((inputLine) => {
        inputSum += findFirstAndLastNumbers(inputLine);
    });
    console.log(inputSum);
};
exports.day1 = day1;
const findFirstAndLastNumbers = (inputLine) => {
    const completeForwardRegex = new RegExp(regexNumbers.source + "|" + regexForward.source);
    const completeBackwardRegex = new RegExp(regexNumbers.source + "|" + regexBackward.source);
    return (findFirstNumber(inputLine, completeForwardRegex) +
        findFirstNumber(reverseCode(inputLine), completeBackwardRegex));
};
function reverseCode(codeToReverse) {
    return codeToReverse.split("").reverse().join("");
}
const findFirstNumber = (inputLine, regex) => {
    const firstNumber = inputLine.match(regex);
    return formatNumber(firstNumber ? firstNumber[0] : "");
};
const formatNumber = (sentNumber) => {
    if (!sentNumber)
        return 0;
    const convertedSentNumber = Number(sentNumber);
    if (typeof convertedSentNumber === "number")
        return convertedSentNumber;
    if (sentNumber.match(regexBackward)) {
        sentNumber = sentNumber.split("").reverse().join("");
    }
    return stringToNumberConverter[sentNumber];
};
