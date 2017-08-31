const intersection = require("./intersection").intersection;
const assert = require("assert");

describe("intersection", function() {
  it("return an empty array is no intersecting elements", function() {
    assert.deepEqual([], intersection([1, 5, 4, 2], [7, 12]));
  });
  it("return the intersecting elements", function() {
    assert.deepEqual([4,1], intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
  });
});
