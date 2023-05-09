// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
  //   return array.map((x, i)  => (i + 1) + ": " + x);
  return array.map(function (x, i) {
    return i + 1 + ": " + x;
  });
};

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = (N) => {
  let array = [];
  for (i = 0; i < N; i++) {
    array.push(i);
  }
  return array;
};

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
  let d = drone.length;
  let str = "";
  for (let i = 0; i < lamps.length; i++) {
    if (i < d) {
      str += "o";
    } else {
      str += "x";
    }
  }
  return str;
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
