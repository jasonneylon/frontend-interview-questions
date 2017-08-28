const assert = require("assert");
const missing = require("./missing").missing;

describe("Missing", function() {
  it("is null for an empty array", function() {
    assert.equal(null, missing([]));
  })
  it("finds for unsorted array", function() {
    assert.equal(2, missing([1, 4, 3]));
  })
  it("finds for sorted array", function() {
    assert.equal(1, missing([2, 3, 4]));
  })
  it("finds for bigger mixed array", function() {
    assert.equal(3, missing([5, 1, 4, 2]));
  })
  it("If no number missing just return null", function() {
    assert.equal(null, missing([1, 2, 3, 4]));
  })
});
