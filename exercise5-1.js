// Functions written using traditional syntax.
function square(number) {
  return number * number;
}

function square2(number) {
  return number ** 2;
}

// Arrow function expressions.
let alt_square1 = (number) => {
  return number * number;
}

let alt_square2 = (number) => {
  return number ** 2;
}

// More compact arrow function expressions.
let alt_square3 = number => number * number;
let alt_square4 = number => number ** 2;

console.log(square(5));
console.log(square2(5));
console.log(alt_square1(5));
console.log(alt_square2(5));
console.log(alt_square3(5));
console.log(alt_square4(5));
