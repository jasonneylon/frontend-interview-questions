function reverse(str) {
  let reversed = "";
  for (var i=str.length; i > 0; i--) {
    reversed += str[(i-1)];
  }
  return reversed;
}

module.exports.reverse = reverse;
