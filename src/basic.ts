// 💡a tool that helps us find these bugs before our code runs
/* const message = "Hello World!";
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message(); */

// ✅Spot undefined property
/* const user = {
	name: "Daniel",
	age: 26,
};

user.location; */

// ✅Spot Typos
/* const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase(); */

// ✅Spot uncalled functions
/* function flipCoin() {
	// Meant to be Math.random()
	return Math.random < 0.5;
} */

// ✅Spot basic logic errors
/* const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
	// ...
} else if (value === "b") {
}
 */

// 💡the core type-checker can provide error messages and code completion as you type in the editor
/* import express from "express";
const app = express();
app.get("/", function (req, res) {
  res.sen
}
app.listen(3000) */
