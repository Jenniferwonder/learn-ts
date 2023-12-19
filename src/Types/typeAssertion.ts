// you can use a type assertion to specify a more specific type
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// This rule prevents “impossible” coercions like:
// const x = "hello" as number;

// To allow more complex coercions that might be valid
// const a = expr as any as T;
