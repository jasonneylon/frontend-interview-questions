const assert = require("assert");
const fib = require("./fib").fib;
describe("Fibonnaci numbers", function() {
  it("fib of 1 is 1", function() {
    assert.equal(fib(1), 1);
  })
  it("fib of 2 is 1", function() {
    assert.equal(fib(2), 1);
  })
  it("fib of 3 is 2", function() {
    assert.equal(fib(3), 2);
  })
  it("fib of 4 is 3", function() {
    assert.equal(fib(4), 3);
  })
  it("fib of 10 is 55", function() {
    assert.equal(fib(10), 55);
  })
  it("fib of 20 is 6765", function() {
    assert.equal(fib(20), 6765);
  })
});

