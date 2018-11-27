// Try 1: the disorganised method:

// for (let i = 1; i <= 100; i++) {

//   if ( (i % 3 == 0) && (i % 5 == 0) ) {
//     console.log("FizzBuzz")
//   }

//   else if (i % 3 === 0 ) {
//     console.log("Fizz")
//   }
//   else if (i % 5 === 0  ) {
//     console.log("Buzz")
//   }

//   else {
//     console.log(i)
//   }

// }

// Try 2: the cleaner method:

// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) {
//     output += "Fizz";
//   }
//   if (i % 5 === 0) {
//     output += "Buzz";
//   }

//   if (output == "") {
//     output = i;
//   }

//   console.log(output);
// }

// Try 3: the 'make that a function as per 2nd video' method:

// Try 4:  egghead Typescript: https://egghead.io/lessons/typescript-understand-the-fizzbuzz-coding-problem-and-its-solution 
// >> A common additional request is to only do the multiple detection math once:


// for (let index = 1; index < 101; index++) {
//   const isFizz = index % 3 === 0;
//   const isBuzz = index % 5 === 0;
//   if ( isFizz && isBuzz ) {
//     console.log("FizzBuzz")
//   }
//   else if (isFizz ) {
//     console.log("Fizz")
//   }
//   else if ( isBuzz ) {
//     console.log("Buzz")
//   }
//   else {
//     console.log(index)
//   }
// }

// ++ Another common additional request is to remove the console log duplication.  Another common additional request is to remove the console log duplication. You can do that by creating a variable for the result, and then storing the result and this variable for each condition, and finally logging out the result variable:

// for (let index = 1; index < 101; index++) {
//   const isFizz = index % 3 === 0;
//   const isBuzz = index % 5 === 0;
//   let result
//   if ( isFizz && isBuzz ) {
//     result = ("FizzBuzz")
//   }
//   else if (isFizz ) {
//     result = ("Fizz")
//   }
//   else if ( isBuzz ) {
//     result = ("Buzz")
//   }
//   else {
//     result = (index)
//   }
//   console.log(result)
// }



// ++ Another thing the interviewer might request is to remove the mutation of the result variable and present a solution with the more functional approach. They might even give you the hint to use the conditional ternary operator. 
// >> An "if...else" chain with only single assignment statements can easily be converted into a _ternary chain_. We will go ahead and assign the result to an expression driven by the conditional ternary operator. ++ Now, since there is no lazy assignment to the result variable, we can make it const as well. 


for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  const result =
    isFizz && isBuzz ? "FizzBuzz"
      : isFizz ? "Fizz"
        : isBuzz ? "Buzz"
          : index

  console.log(result)
}
// make it render in div HTML
// Make it React.js
