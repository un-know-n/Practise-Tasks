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

//console.log(one(plus(three(minus(one()))))); // 3

//* =====================================
//* Balanced brackets
//*======================================

// Check if the string exists
// Loop through the string
// Check if the symbol is a bracket
// If it is a open one - push to stack
// If closing one - pop the stack
// If the stack is empty - true, else - false

const isBalanced = (brackets) => {
  if (!brackets) return false;

  const stack = [];
  const supportedBrackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < brackets.length; i++) {
    const symbol = brackets[i];

    // Check if it is the opening bracket
    if (Object.keys(supportedBrackets).includes(symbol)) stack.push(symbol);

    // Check if it is the closing bracket
    if (Object.values(supportedBrackets).includes(symbol)) {
      if (supportedBrackets[stack[stack.length - 1]] !== symbol) return false;
      stack.pop();
    }
  }

  return !Boolean(stack.length);
};

// console.log(isBalanced('[({})]'));
// console.log(isBalanced('[(X+y) - {4}]'));
// console.log(isBalanced('(50)('));
// console.log(isBalanced('[{]}'));
