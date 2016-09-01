var uniqueRandomArray = require('unique-random-array');
var sampleNames = require('./sample-names.json');
var getRandomItem = uniqueRandomArray(sampleNames);

module.exports = {
  all: sampleNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
};
