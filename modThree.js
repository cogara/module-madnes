var modOne = require('./modOne.js');
var modTwo = require('./modTwo.js');

module.exports = {
  balance: balance,
  randomToCurrency: randomToCurrency,
}

function balance() {
  console.log('Account Balance:');
}

function randomToCurrency(min, max) {
  console.log(modTwo.toCurrency(modOne.getRandom(min, max)));
}
