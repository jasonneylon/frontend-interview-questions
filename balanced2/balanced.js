Array.prototype.peek = function() { return this[this.length-1]; }

function isBalanced(str) {
 const closingBracesToBrace = {
    "}": "{",
    "]": "[",
    ")": "("
  }

  const openingBraces = ["{", "[", "("];
  const closingBraces = ["}", "]", ")"];

  const braceStack = [];

  for (let i =0; i < str.length; i++) {
    const letter = str[i];
    const openingBrace = closingBracesToBrace[letter];

    if (openingBraces.includes(letter)) {
      braceStack.push(letter);
    }

    if (closingBraces.includes(letter)) {
      if (braceStack.peek() !== openingBrace) {
        return false;
      } 
      braceStack.pop();
    }

   };
  return (braceStack.length === 0);
}

module.exports.isBalanced = isBalanced;
