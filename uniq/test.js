const assert = require("assert");
const uniq = require("./uniq").uniq;

describe("uniq", function() {
  it("return empty array for an empty array", function() {
    assert.deepEqual([], uniq([]));
  });
  it("returns uniq elements in an array with duplicates", function() {  
    assert.deepEqual([1, 4, 2, 3, 8], uniq([1, 4, 2, 2, 3, 4, 8]));
  });
});
