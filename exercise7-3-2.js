Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.lastUsingSlicing = function() {
  return this.slice(-1)[0];
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a.last());              // 10
console.log(a.lastUsingSlicing());  // 10
