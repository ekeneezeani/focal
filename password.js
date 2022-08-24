const password = function(pass) {
  return obfuscate(pass);
};


const obfuscate = function(input) {
  let returnVal = '';
  for (let char of input) {
    //console.log(char);
    if (char === 'a') {
      returnVal += 4;
    } else if (char === 'e') {
      returnVal += 3;
    } else if (char === 'o') {
      returnVal += 0;
    } else if (char === 'l') {
      returnVal += 1;
    } else {
      returnVal += char;
    }
  }
  return returnVal;
};

// console.log(obfuscate('Katie'));

const pass = process.argv[2];

console.log(password(pass));
//console.log(pass);