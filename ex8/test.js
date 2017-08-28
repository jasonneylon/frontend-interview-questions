const assert = require("assert");
const indexOf = require("./indexof").indexOf;

describe("indexOf", function() {
  it("returns -1 if not present", function() {
    assert.equal(-1, indexOf([1,2,3], 4));
  })

  it("return index if present", function() {
    assert.equal(2, indexOf([1,2,3], 3));
  });
});
