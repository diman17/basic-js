const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  const SECONDS_IN_HOUR = 60 * 60;
  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor((result.turns * SECONDS_IN_HOUR) / turnsSpeed);
  return result;
};
