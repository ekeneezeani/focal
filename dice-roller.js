
const args = process.argv;

const arg = args.slice(2);

const showDice = function(num) {
  if (num <= 0) {
    console.log('Enter a number greater than 0');
    process.exit();
  }
  let sides = rolltDice(num);

  return `Rolled ${num} dice: ${joinList(sides)}`;
};

const rolltDice = function(num) {
  let sides = [];
  for (let i = 0; i < num; i++) {
    sides.push(Math.ceil(Math.random() * 6));
  }
  return sides;
};

const joinList = function(arr) {
  let arrayToString = '';
  for (let i = 0; i < arr.length; i++) {
    i !== arr.length - 1 ? arrayToString += arr[i] + ', '
      : arrayToString += arr[i];
  }
  return arrayToString;
};

console.log(showDice(arg));