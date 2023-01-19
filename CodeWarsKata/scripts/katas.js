// @ts-nocheck
//=======================
//START
//=======================

//* =====================================
//* Kata title here
//*======================================

//* =====================================
//* Vowel Count
//*======================================

// const vowelCount = (string) =>
//   string
//     .split('')
//     .reduce(
//       (acc, symb) =>
//         ['a', 'e', 'i', 'o', 'u'].includes(symb) ? (acc += 1) : (acc += 0),
//       0
//     );

//console.log(vowelCount('Something'));

//? Best Practises

// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//  }

// function getCount(str) {
//   return (str.match(/[aeiou]/g) || []).length
// }

//* =====================================
//* Find the odd int
//*======================================

// const findOdd = (array) =>
//   array.sort((a, b) => a - b)[0] !== array[1]
//     ? array[0]
//     : findOdd(array.splice(2, array.length));

//console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// TODO: Re-watch
//? Best Practises

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
// }

// function findOdd(A) {
//   return A.reduce(function (c, v) {
//     return c ^ v;
//   }, 0);
// }

// function findOdd(A) {
//   //happy coding!
//   var x = 0;
//   for (var i = 0; i < A.length; i++) {
//     x = x ^ A[i];
//   }
//   return x;
// }

//* =====================================
//* Create Phone Number
//*======================================

// const phoneNumber = (array) => {
//   const arr = array.join('');
//   return `(${arr.slice(0, 3)}) ${arr.slice(3, 6)}-${arr.slice(6, 10)}`;
// };

//console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//? Best Practises

// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
// }

// function createPhoneNumber(numbers) {
//   return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
// }

//* =====================================
//* Find The Parity Outlier
//*======================================

// const findParity = (array) => {
//   const odd = [],
//     even = [];
//   array.map((item) => (item % 2 === 0 ? even.push(item) : odd.push(item)));
//   return odd.length > even.length ? even[0] : odd[0];
// };

//console.log(findParity([160, 3, 1719, 19, 11, 13, -21]));

// TODO: Re-watch
//? Best Practises

// function findOutlier(ints) {
//   return ints.slice(0, 3).reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
//     ? ints.find((i) => i % 2 === 0)
//     : ints.find((i) => i % 2 !== 0);
// }

//* =====================================
//* The range() Function
//*======================================

// TODO: Find better solution!

const range = (start = 0, stop, step = 1) => {
  if (start > stop) return [];
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  const array = [];
  for (start; start * step < stop; start++)
    array.push(step <= 0 ? 1 : step * start);
  return array;
};

//console.log(range(0, 30, 5));
//console.log(range(1, 11));

//* =====================================
//* Multiples of 3 or 5
//*======================================

// const multiples = (number) =>
//   number <= 0
//     ? 0
//     : Array.from(new Array(number).keys())
//         //.map((itm, i) => (itm = i))
//         .reduce(
//           (acc, item) =>
//             item % 3 === 0
//               ? (acc += item)
//               : item % 5 === 0
//               ? (acc += item)
//               : (acc += 0),
//           0
//         );

// console.log(multiples(-91));

//? Best Practises

// function solution(number) {
//   return number < 1
//     ? 0
//     : [...new Array(number).keys()]
//         .filter((n) => n % 3 == 0 || n % 5 == 0)
//         .reduce((a, b) => a + b);
// }

// const solution = (n) =>
//   n <= 0
//     ? 0
//     : Array.from({ length: n }, (_, i) =>
//         i % 3 == 0 || i % 5 == 0 ? i : 0
//       ).reduce((x, y) => x + y);

// function solution(number){
//   var sum = 0;
//   while (number > 0){
//     number--;
//     sum += (!(number%3)) ? number : (!(number%5)) ? number : 0;
//   }
//   return sum;
// }

// function solution(number){
//   for(acc=0; --number > 2;){
//     acc = !(number%3) || !(number%5) ? acc + number : acc;
//   }
//   return acc;
// }

//* =====================================
//* Unique in order
//*======================================

// const unique = (sequence) => {
//   const finalized = [];
//   typeof sequence !== 'object' ? (sequence = sequence.split('')) : '';
//   sequence.map((item) =>
//     item !== finalized.at(-1) ? finalized.push(item) : ''
//   );
//   return finalized;
// };

// console.log(unique('ABBCcAD'));

// TODO: Re-watch
//? Best Practises:

// var uniqueInOrder = function (iterable) {
//   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
// };

// var uniqueInOrder = function (iterable) {
//   return [].filter.call(iterable, function (a, i) {
//     return iterable[i - 1] !== a;
//   });
// };

//* =====================================
//* Playing with digits
//*======================================

// const digPow = (number, pow) => {
//   const calculated = Array.from(
//     { length: number.toString().length },
//     (_, i) => (i = Number(number.toString()[i]))
//   ).reduce((acc, item, i) => acc + item ** (pow + i), 0);
//   const divided = calculated / number;
//   return divided === Math.round(divided) ? divided : -1;
// };

// console.log(digPow(89, 1));

// TODO: Re-watch
//? Best Practises:

// function digPow(n, p) {
//   var x = String(n)
//     .split('')
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }

// function digPow(n, p) {
//   var ans =
//     n
//       .toString()
//       .split('')
//       .map((v, i) => Math.pow(parseInt(v), i + p))
//       .reduce((a, b) => a + b) / n;
//   return ans % 1 == 0 ? ans : -1;
// }

//* =====================================
//* Does my number look big in this?
//*======================================

// const armstrongNumber = (number) => {
//   return Array.from(
//     { length: number.toString().length },
//     (_, i) => (i = Number(number.toString()[i]))
//   ).reduce((acc, item) => acc + item ** number.toString().length, 0) === number
//     ? true
//     : false;
// };

// console.log(armstrongNumber(153));

//* =====================================
//* Your order please
//*======================================

// const yourOrder = (string) => {
//   if (string === '') return string;
//   const answer = [];
//   for (let i = 1; i < string.length + 1; i++)
//     string
//       .split(' ')
//       .map((item) => (item.includes(i) ? answer.push(item) : ''));
//   return answer.join(' ');
// };

// console.log(yourOrder('4of Fo1r pe6ople g3ood th5e the2'));

// TODO: Re-watch
//? Best Practises:

// function order(words) {
//   return words
//     .split(' ')
//     .sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/))
//     .join(' ');
// }

// function order(words) {
//   const numerate = (s) => s.split('').find((x) => Number.isInteger(+x));
//   return words
//     .split(' ')
//     .sort((a, b) => numerate(a) - numerate(b))
//     .join(' ');
// }

//* =====================================
//* Check brackets (if the string has enough of closing brackets)
//*======================================

function checkBrackets(string) {
  const array = string.split('');
  const supportedBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    const symbol = array[i];
    if (Object.keys(supportedBrackets).includes(symbol)) stack.push(symbol);
    else {
      const lastSymbol = stack.pop();
      if (symbol !== supportedBrackets[lastSymbol]) return false;
    }
  }
  return !stack.length;
}

console.log(checkBrackets('([{(})]({(())}({})))[]'));
console.log(checkBrackets('{(})'));

//! =======================
//! END
//! =======================
