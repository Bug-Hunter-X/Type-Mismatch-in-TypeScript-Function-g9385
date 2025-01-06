# Type Mismatch in TypeScript Function

This repository demonstrates a common type error in TypeScript where a function is called with arguments that do not match the function's type signature.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

The bug arises from passing a string to a function expecting a number. TypeScript's type system catches this error during compilation.  This example highlights the importance of carefully defining function parameters and checking argument types before function calls. 