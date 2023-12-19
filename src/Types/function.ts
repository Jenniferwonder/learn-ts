// 💡Functions
// ✅Parameter type annotation
/* function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(42); */

// ✅Return type annotation
/* function getFavoriteNumber(): number {
  return 26;
} */
// ✅Functions Which Return Promises
/* async function getFavoriteNumber(): Promise<number> {
  return 26;
} */
// ✅Anonymous Functions
/* const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
}); */
