let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalProduct(array) {
  return array.reduce((total, n) => total *= n);
}
console.log(functionalProduct(a));
