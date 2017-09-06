const assert = require("assert");
const includes = require("./includes").includes;

describe("Includes", function() {
  it("finds existing element", function() {
    assert(includes([1, 3, 8, 10], 8));
  })
  it("finds existing element at end", function() {
    assert(includes([1, 3, 8, 10, 15], 15));
  })
  it("doesn't finds missing element", function() {
    assert(!includes([1, 3, 8, 10], 9));
  })
})
