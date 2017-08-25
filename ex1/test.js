var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


var isPrime = require('./index.js').isPrime;

describe("isPrime", () =>  {
  it("should return true for 2, 3, 5, 7, 11",  () =>  {
    assert.equal(true, isPrime(2), "2 is a prime");
    assert.equal(true, isPrime(3), "3 is a prime");
    assert.equal(true, isPrime(5));
    assert.equal(true, isPrime(7));
    assert.equal(true, isPrime(11));
    assert.equal(true, isPrime(17));
  })

  it("should return false for 4, 6, 8, 9, 10, 12", () =>  {
    assert.equal(false, isPrime(0));
    assert.equal(false, isPrime(1));
    assert.equal(false, isPrime(4));
    assert.equal(false, isPrime(6));
    assert.equal(false, isPrime(8));
    assert.equal(false, isPrime(9));
    assert.equal(false, isPrime(10));
    assert.equal(false, isPrime(12));
    assert.equal(false, isPrime(10000000000000), "Big number");
  });
});
