// A type alias is exactly that - a name for any type.
type Point = {
	x: number;
	y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Interfaces may only be used to declare the shapes of objects, not rename primitives, but type aliases can.
type ID = number | string;
