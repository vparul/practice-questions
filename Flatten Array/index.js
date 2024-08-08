// Question
const a = [1, 2, 3, [4, [5, 6]], 7, 8];
// output - [1,2,3,4,5,6,7,8]
const b = [1, 2, 3, { test: "abc" }, true, false, [[3, 6]]];
// output - [1,2,3,{ test: "abc"}, true, false, 3,6];
// Execute a function that will flatten this Array

// Output 1
// const output = [];
// const flattenArray = (arr) => {
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             flattenArray(element)
//         } else {
//             output.push(element);
//         }
//     })
//     return output;
// }

// console.log(flattenArray(b));

//Output 2
const flattenArray = (arr, output) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element, output);
    } else {
      output.push(element);
    }
  });
  return output;
};

console.log(flattenArray(a, []));
