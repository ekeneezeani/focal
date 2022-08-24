'use strict';
let argsArray = process.argv;
const count = argsArray.length;
argsArray = argsArray.slice(count - 2,count);
const numOne = Number(argsArray[0]);
const numTwo = Number(argsArray[1]);

const addArgument = function(numOne, numTwo) {
  const sum = numOne + numTwo;
  console.log(sum);
};
addArgument(numOne,numTwo);