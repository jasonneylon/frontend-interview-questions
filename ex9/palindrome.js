function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str.includes(" ")) {
    return isPalindrome(str.replace(/\s/g, ""));
  }
   if (str.match(/[AZ]/)) {
    return isPalindrome(str.toLowerCase());
  }
  const firstLetter = str[0];
  const lastLetter = str[str.length-1];
  if (firstLetter === lastLetter) {
    const lengthWithoutFirstAndLast = str.length - 2;
    const subPalindrome = str.substr(1, lengthWithoutFirstAndLast); 
    return isPalindrome(subPalindrome);
  }
  return false;
}

module.exports.isPalindrome = isPalindrome;
