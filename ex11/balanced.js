function isBalanced(str) {
  let curlyCount = 0;
  Array.from(str).every((letter) => {
    if (letter === "}" && curlyCount === 0) {
      curlyCount--;
      return false;
    }
    if (letter === "{") {
      curlyCount++;
    }
    if (letter === "}") {
      curlyCount--;
    }
    return true;
  });
  return curlyCount === 0;
}

module.exports.isBalanced = isBalanced;
