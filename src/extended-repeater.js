const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let string = '' + str;
  let repeatString;
  if (options.hasOwnProperty('addition')) {
    let addition = '' + options.addition;
    let arrayOfadditions = [];
    if (!Number.isInteger(options.additionRepeatTimes)) {
      arrayOfadditions.push(addition);
    } else {
      for (let i = 1; i <= options.additionRepeatTimes; i++) {
        arrayOfadditions.push(addition);
      }
    }
    let stringOfAddition;
    if (!options.hasOwnProperty('additionSeparator')) {
      stringOfAddition = arrayOfadditions.join('|');
    } else {
      stringOfAddition = arrayOfadditions.join(options.additionSeparator);
    }
    repeatString = string + stringOfAddition;
  } else {
    repeatString = string;
  }
  let arrayOfrepeatString = [];
  if (!Number.isInteger(options.repeatTimes)) {
    arrayOfrepeatString.push(repeatString);
  } else {
    for (let i = 1; i <= options.repeatTimes; i++) {
      arrayOfrepeatString.push(repeatString);
    }
  }
  let result;
  if (!options.hasOwnProperty('separator')) {
    result = arrayOfrepeatString.join('+');
  } else {
    result = arrayOfrepeatString.join(options.separator);
  }
  return result;
};
