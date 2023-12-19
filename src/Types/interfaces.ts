// TypeScript a structurally typed type system
// Type aliases and interfaces are very similar
// Difference: a type cannot be re-opened to add new properties vs an interface which is always extendable.
// Interfaces may only be used to declare the shapes of objects, not rename primitives.
interface Points {
	x: number;
	y: number;
}

function printsCoord(pt: Points) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Extending an interface
/* interface Animal {
	name: string;
}

interface Bear extends Animal {
	honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey; */
