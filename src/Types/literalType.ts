let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

// by combining literals into unions, you can express a much more useful concept
// Functions that only accept a certain set of known values:
function printText(s: string, alignment: "left" | "right" | "center") {
	// ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// You can combine these with non-literal types:
interface Options {
	width: number;
}
function configure(x: Options | "auto") {
	// ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic");

// The type boolean itself is actually just an alias for the union true | false

// Literal Inference
declare function handleRequest(url: string, method: "GET" | "POST"): void;

// 🐛Error
/* const req = { url: "https://example.com", method: "GET" };

handleRequest(req.url, req.method); */
// ✅Change 1: You can change the inference by adding a type assertion in either location
const req = { url: "https://example.com", method: "GET" as "GET" };
// ✅Change 2
handleRequest(req.url, req.method as "GET");
// ✅Change 3: You can use as const to convert the entire object to be type literals
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
/* const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method); */
