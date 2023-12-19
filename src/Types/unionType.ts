// 💡Union Types
// A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
// ✅Defining a Union Type
function printId(id: number | string) {
	// console.log("Your ID is: " + id);
	if (typeof id === "string") {
		// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	} else {
		// Here, id is of type 'number'
		console.log(id);
	}
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

// ✅Working with Union Types
// Array.isArray()
function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		// Here: 'x' is 'string[]'
		console.log("Hello, " + x.join(" and "));
	} else {
		// Here: 'x' is 'string'
		console.log("Welcome lone traveler " + x);
	}
}
