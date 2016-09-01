var expect = require('chai').expect;
var starWares = require('./index');

describe('sample-names', function() {
  describe('all', function() {
    it('Should be an array of strings', function() {
      expect(starWares.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof(item) === "string";
        })
      }
    });

    it('Should contain `Mohammad`', function() {
      expect(starWares.all).to.include('Mohammad');
    });
  });

  describe('random', function() {
    it('Should return the random string from starWares.all', function() {
      expect(starWares.all).to.include(starWares.random());
    });

    it('Should return an array of random items if passed a number', function() {
      var randomItems = starWares.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWares.all).to.include(item);
      })
    });
  });
});
