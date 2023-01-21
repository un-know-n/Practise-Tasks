//* =====================================
//* Strange Math
//*======================================

function one(callback) {
  return callback ? callback(1) : 1;
}
function three(callback) {
  return callback ? callback(3) : 3;
}

function plus(x) {
  return (y) => y + x;
}
function minus(x) {
  return (y) => y - x;
}
function divide(x) {
  return (y) => y / x;
}
function multiply(x) {
  return (y) => y * x;
}

console.log(one(plus(three(minus(one()))))); // 3
