const assert = require("assert");
const reverse = require("./reverse").reverse;

describe("Reverse", function() {
  it("should return a letter as is", function() {
    assert.equal("a", reverse("a"));
  });
  it("should return a string reversed", function() {
    assert.equal("abcdef", reverse("fedcba"));
  });

});
