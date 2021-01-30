// Explanation/Example

// Here is a traditional function with 3 arguments/parameters
function product1(x, y, z) {
  // console.log(x, y, z) 
  return x * y * z;
}
console.log(`Traditional Function Answer: ${product1(2,4,6)}`)//48


// Essentially, when you have a function with more than one argument some things can go awry in your code. What currying will do is transform the above function into a seuquence of functions that each take a single argument making it cleaner and more concise.

// I will change the naming here just so both can run and you can see the output is the same although we curried the function.

function product2(x) {
  // console.log(x) 
  return (y) => {
    // console.log(y)
    return (z) => {
      // console.log(z)
      return x * y * z;
    }
  }
}
console.log(`Curried Function Answer: ${product2(2)(4)(6)}`)// 48

// As you can see above the output was the same with our curried function, but we can go through what we just did. It does a series of calls in a sequence.



//Lets break this down line by line.

//First you declare your function.
function product2(x) {

  // After the above first function processes, it then it returns the second parameter.
  return (y) => {

    // After the above second function processes, it then it returns the third parameter.
    return (z) => {

      // After the final function above processes, it finally returns our result.
      return x * y * z;
    }
  }
}
// Here we console.log our curried function by passing in parameters.
console.log(`Curried Function Breakdown Answer: ${product2(2)(4)(6)}`)//48

// Lets look at the difference in calling a traditional function and curried function.

// Traditional Function Call
// console.log(product1(2,4,6))

// Curried Function Call 
// console.log(product2(2)(4)(6))



// Using the same example above, we can separate this. This shows that as long as the sequence is correct, regardless of how its called, it gives the same result. Also proving we still have access to the functions inside of the curried function.

let answer1 = product2(2); 
let answer2 = answer1(4);
let finalResult = answer2(6);

console.log(`Access To Functions Within Curried Function Answer: ${finalResult}`)//48


// Lets break that down. 

// Here I am passing the number 2 as my argument to the product2 function.
// let answer1 = product2(2);

// Next we call the answer1 function where we pass in the number 4:
// let answer2 = answer1(4);

// Next we call the answer2 function where we pass in the number 6:
// let finalResult = answer2(6);

// Our code runs the function, multiplying the parameters we passed in:
// console.log(finalResult)//48