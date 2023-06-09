// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function problem1(str1, num1) {
  return Array(num1).fill(str1);
}
// console.log(problem1("apple", 3));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function arrayReverse(arr) {
  return [...arr].reverse();
}
// console.log(arrayReverse([1, 2, 3, 4]));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function truthy(arr) {
  return arr.filter((a) => !!a);
}
// console.log(truthy([1, "apple", "", undefined, null, 0, 4]));
// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function nestedArrays(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];
    obj[key] = value; // ["name", "charlie"] -- ["color", "brown"] -- ["age", 10]
  }
  return obj;
}
// console.log(
//   nestedArrays([
//     ["name", "Charlie"],
//     ["color", "brown"],
//     ["age", 10],
//   ])
// );

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function removeDupe(arr) {
  let seen = [];
  return arr.filter((n) => {
    if (!seen.includes(n)) {
      seen.push(n);
      return true;
    } else {
      return false;
    }
  });
}
console.log(removeDupe([1, 2, 3, 4, 5, 4, 3]));

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function twoArrays(arr1, arr2) {
  return arr1.sort().join() === arr2.sort().join();
}
console.log(twoArrays([1, 2, 3, 4], [1, 4, 3, 2]));

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
