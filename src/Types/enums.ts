// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
// Numeric enums
/* enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
} */

// Use an enum
/* enum UserResponse {
	No = 0,
	Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
	// ...
}

respond("Princess Caroline", UserResponse.Yes); */

// String enums
enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}
