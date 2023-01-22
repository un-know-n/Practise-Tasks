//* =====================================
//* Prototype, Context, Arguments
//*======================================

const START = Date.now();

function someFn() {
  console.log('time', Date.now() - START);
  console.log('args', arguments);
}

Function.prototype.delay = function (ms) {
  return (...args) => {
    return setTimeout(() => {
      this.apply(this, args);
    }, ms);
  };
};

//const f = someFn.delay(500);

//f('arg1', 'arg2', 1, 2);

//* =====================================
//* Binary Tree
//*======================================

const binaryTree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
      },
    },
    right: {
      value: 7,
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
};

const sumBinaryTree = (binaryT) => {
  if (!binaryT) return;
  let value = binaryT.value;
  if (binaryT.left) value += sumBinaryTree(binaryT.left);
  if (binaryT.right) value += sumBinaryTree(binaryT.right);
  return value;
};

//console.log(sumBinaryTree(binaryTree));

//* =====================================
//* Random Tree
//*======================================

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

const recursive = (tree) => {
  const sum = tree.reduce((acc, item) => {
    acc += item.v;
    if (item.c) return (acc += recursive(item.c));
    return acc;
  }, 0);
  return sum;
};

const iterative = (tree) => {
  if (!tree.length) return 0;
  let sum = 0;
  const stack = [];
  tree.map((node) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (!node.c) continue;
    node.c.map((item) => stack.push(item));
  }
  return sum;
};

//console.log(iterative(tree));

//* =====================================
//* Functions
//*======================================

const sum = function (x) {
  console.log(x);
  return function (y) {
    return sum(x + y);
  };
};

//console.log(sum(5)(4)(3)(2)(1));

//* =====================================
//* Objects
//*======================================

const mergeSameKeysOfObjects = (obj1, obj2) => {
  for (const key in obj2) {
    if (Object.keys(obj1).includes(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
};

// console.log(
//   mergeSameKeysOfObjects(
//     { foo: 'data', some: 'bar' },
//     { foo: 'foo', bar: 'bar' }
//   )
// );

//* =====================================
//* Callbacks
//*======================================

const groupBy = (array, callback) => {
  const result = {};
  array.forEach((item) => {
    const finalized = callback(item);
    result[finalized]
      ? result[finalized].push(item)
      : (result[finalized] = [item]);
  });
  return result;
};

//console.log(groupBy([6.3, 3.3, 3.6, 3.2, 5.1], Math.ceil));

//* =====================================
//* Own map method
//*======================================

const arr = [2, -3, 5, 3, 1, 198, 423, 76];

Array.prototype.myMap = function (callback) {
  const array = this;
  const resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = callback(array[i], i, array);
    resultingArray.push(element);
  }
  return resultingArray;
};

//console.log(array.myMap((item, index, arr) => String(item)));

//* =====================================
//* Own flat method
//*======================================

const nonFlatedArr = [[1, 2, [3, [4]]], 5, [[7]]];

const ownFlat = (array) => {
  let resultedArray = [];
  array.forEach((element) => {
    if (Array.isArray(element))
      resultedArray = resultedArray.concat(ownFlat(element));
    else resultedArray.push(element);
  });
  return resultedArray;
};

//console.log(ownFlat(nonFlatedArr));

//* =====================================
//* isUnique
//*======================================

// const isUnique = (value) => [...new Set(value.split(''))].join('') === value;

const isUnique = (value) => new Set(value).size === value.length;

//console.log(isUnique('abcadfe'));

//* =====================================
//* Array subset
//*======================================

function arraySubset(source, subset) {
  return source.sort().join().includes(subset.sort().join());
}

//console.log(arraySubset([1, 1, 1, 3], [1, 3, 3]));
