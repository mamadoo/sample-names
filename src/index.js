var uniqueRandomArray = require('unique-random-array');
var sampleNames = require('./sample-names.json');


module.exports = {
  all: sampleNames,
  random: uniqueRandomArray(sampleNames)
};
