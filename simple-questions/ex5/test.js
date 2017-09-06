const assert = require("assert");
const filter = require("./filter").filter;

describe("Filter function", function() {
  it("Filter an empty array, return the array", function() {
    assert.deepEqual([], filter([]));
  });
  it("Filter a single item array, return the array", function() {
    assert.deepEqual([1], filter([1], () => true));
  });
   it("Filter a single item array with a negative filter ", function() {
    assert.deepEqual([], filter([1], () => false));
  });

 it("Filter a single item array with a proper filter", function() {
    assert.deepEqual([1,2], filter([1,2], (x) => x < 3));
  });

});
