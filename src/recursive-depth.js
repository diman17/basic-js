const { server } = require('sinon');
const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    let currentDepth;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth = 1 + this.calculateDepth(arr[i]);
      }
      if (maxDepth < currentDepth) {
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
};
