const assert = require("assert");
const isSorted = require("./sorted").isSorted;

describe("Sort array of values", function() {
  it("An empty array is sorted", function() {
    assert.ok(isSorted([]));
  });
  it("An unsorted array is unsorted", function() {
    assert(!isSorted([5,3,4]));
  });
  it("An sorted array is sorted", function() {
    assert(isSorted([1,2,3]));
  });
  it("Handles infinity ok", function() {
    assert(isSorted([-Infinity, -5, 0, 3, 9]));
  });
});
