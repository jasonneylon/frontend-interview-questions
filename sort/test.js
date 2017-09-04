const assert = require("assert");
const sort = require("./sort").sort;

describe("sort", function() {
  it("empty returns empty", function() {
    assert.deepEqual([], sort([]));
  });
  it("sorts", function() {
    assert.deepEqual([-4, 0, 1, 3, 3, Infinity], sort([-4, 1, Infinity, 3, 3, 0]));
  });
});
