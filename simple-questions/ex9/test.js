const assert = require("assert");
const isPalindrome = require("./palindrome").isPalindrome;

describe("isPalindrome", function() {
  it("an empty string is a palindrome", function() {
    assert(isPalindrome(""));
  });
  it("a single letter is a palindrome", function() {
    assert(isPalindrome("a"));
  });
  it("a simple palindrome", function() {
    assert(isPalindrome("abcba"));
  });
  it("a normla string is not a palindrome", function() {
    assert(!isPalindrome("normalsentancen"));
  });
  it("a mix case senstance a palindrome", function() {
    assert(isPalindrome("A man a plan a canal Panama"));
  });
});

