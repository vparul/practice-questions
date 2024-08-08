const add = (a, b) => a + b;

// const memoizedAdd = memoizeOne(add);

// memoizedAdd(1,2); // 3
// // Add function is called to get new value

// memoizedAdd(1,2); // 3
// // Add function is not executed: previous result is returned

// memoizedAdd(2,3); // 5
// // Add function is called to get new value

// memoizedAdd(2,3); // 5
// // Add function is not executed: previous result is returned

// memoizedAdd(1,2); // 3
// // Add function is not executed: previous result is returned

// Solution

const obj = {};
const memoizeOne = (func) => {
  return (...args) => {
    const key = args.join("_");
    if (obj[key]) {
      console.log("cached value");
      return obj[key];
    }
    console.log("Newly computed value");
    const result = func(...args);
    obj[key] = result;
    return result;
  };
};

const memoizedAdd = memoizeOne(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(1, 2));
