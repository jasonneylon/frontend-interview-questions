const assert = require("assert");
const isBalanced = require("./balanced").isBalanced;

describe("isBalanced", function()  {
  it("}{ is unbalanced", function() {
    assert(!isBalanced("}{"));
  });
  it("{{} is unbalanced", function() {
    assert(!isBalanced("{{}"));
  });
  it("}{ is unbalanced", function() {
    assert(!isBalanced("}{"));
  });
  it("{}{} is balanced", function() {
    assert(isBalanced("{}{}"));
  });
  it("foo { bar { baz } boo } is balanced", function() {
    assert(isBalanced("foo { bar { baz } boo }"));
  });
  it("foo { bar { baz } is unbalanced", function() {
    assert(!isBalanced("foo { bar { baz }"));
  });
  it("foo { bar } }", function() {
    assert(!isBalanced("foo { bar } }"));
  });
  it("(foo { bar (baz) [boo] })", function() {
    assert(isBalanced("(foo { bar (baz) [boo] })"));
  });
  it("foo { bar { baz }", function() {
    assert(!isBalanced("foo { bar { baz }"));
  });
  it("foo { (bar [baz] } )", function() {
    assert(!isBalanced("foo { (bar [baz] } )"));
  });
});
