module.exports = function reverse(n) {
  var num = Math.abs(n);
  return Number(String(num).split('').reverse().join(''));
}
