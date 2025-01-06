function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 2); // Correct usage
console.log(result); // Output: 12

function addString(a: string, b: string): string {
  return a + b;
}

let stringResult = addString("Hello", "World");
console.log(stringResult); // Output: HelloWorld

// To handle both cases safely we can use type guards or union types.
function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 0; // Or throw an error
  }
}

console.log(addSafe(10, 2)); // Output: 12
console.log(addSafe("Hello", "World")); // Output: HelloWorld
console.log(addSafe(10, "World")); // Output: 0