const assert = require("assert");
const assignDeep = require("./deep").assignDeep;

describe("assign deep", function() {
  it("Empty object left as is", function() {
    assert.deepEqual({}, assignDeep({}, {}));
  })
  it("Flat object", function() {
    assert.deepEqual({a: 2}, assignDeep({a: 1}, {a: 2}));
  })
  it("Flat object", function() {
    assert.deepEqual({c: 2, d: 3}, assignDeep({c: 2}, {d: 3}));
  })
  it("Nested object", function() {
    assert.deepEqual({a: {b: 2}}, assignDeep({ a: 1 }, { a: { b: 2 } }));
  })
  it("Deep nested object", function() {
    assert.deepEqual({ a: { b: { c: 1, d: 2 }}, e: 3 }, assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }));
  })
});
