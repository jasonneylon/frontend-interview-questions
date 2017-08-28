const assert = require("assert");
const reduce = require("./reduce").reduce;


const sum = (a,b) => a + b;

describe("The reduce function", function() {
  
  it("return initial value if empty array is provided", function() {
    assert.equal(0, reduce([], sum, 0));
  });


  it("return initial value applied to first item", function() {
    assert.equal(2, reduce([1], sum, 1));
  });

  it("applies a set of values ", function() {
    assert.equal(10, reduce([1,2,3,4], sum, 0));
  });


});
