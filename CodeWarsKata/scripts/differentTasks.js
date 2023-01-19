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
//* Trees
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

function sum(n) {
  console.log(n);
  return (n2) => {
    return sum(n + n2);
  };
}

sum(5)(4)(10);

//* =====================================
//* Objects
//*======================================
