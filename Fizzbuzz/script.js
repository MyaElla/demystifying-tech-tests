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

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }

  if (output == "") {
    output = i;
  }

  console.log(output);
}

// Try 3: the 'make that a function as per 2nd video' method:
// make it render in div HTML
// Make it React.js
