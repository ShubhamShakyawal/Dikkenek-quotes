var uniqueRandomArray = require('unique-random-array');
var dikkenekQuotes = require('./dikkenek-quotes.json');

module.exports = {
  all: dikkenekQuotes,
  random: uniqueRandomArray(dikkenekQuotes)
};
