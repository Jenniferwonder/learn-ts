// This is an industrial-grade general-purpose greeter function:
// ✅noEmitOnError
/* function greet(person, date) {
	console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan"); */

// ✅Explicit Types
function greet(person: string, date: Date) {
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
