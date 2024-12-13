function foo(a, b) {
  // Explicit type conversion using Number()
  return Number(a) + Number(b);
}
console.log(foo(1, "2")); // Output: 3