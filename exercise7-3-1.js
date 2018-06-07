// Returns true if the string is empty or consists solely of whitespace.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}

console.log("foobar".blank());        // false
console.log("   foobar".blank());     // false
console.log("foobar   ".blank());     // false
console.log("   foobar   ".blank());  // false
console.log("".blank());              // true
console.log(" ".blank());             // true
console.log("\r".blank());            // true
console.log("\n".blank());            // true
console.log("\t".blank());            // true
console.log("\f".blank());            // true
console.log("\v".blank());            // true
