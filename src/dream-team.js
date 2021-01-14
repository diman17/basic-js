const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arr.push(
        members[i]
          .match(/[a-zA-Z]/)
          .join('')
          .toUpperCase()
      );
    }
  }
  let result = arr.sort().join('');
  return result;
};
