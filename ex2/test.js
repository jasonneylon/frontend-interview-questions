const factorial = require("./factorial").factorial;
const assert = require("assert");

describe("Calculating the factorial of a number", () => {
  it("The factorial of 0 is 1", () => {
    assert.equal(1, factorial(0));
  })
  it("The factorial of 2 is 2", () => {
    assert.equal(2, factorial(2));
  })
  it("The factorial of 3 is 6", () => {
    assert.equal(6, factorial(3));
  })
  it("The factorial of 6 is 720", () => {
    assert.equal(720, factorial(6));
  })


});
