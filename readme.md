# Currying Explanation

- [Currying Explanation](#currying-explanation)
- [Table Of Content](#table-of-content)
- [Response To Student](#response-to-student)
- [What Is Currying?](#what-is-currying)
- [Currying: Why Use It?](#currying-why-use-it)
- [Working Example](#working-example)



# Table Of Content


# Response To Student

Hey John doe thanks for coming to me regarding your understanding of currying. It is quite a challenging concept to grasp at first, but I would be more than happy to help you with understanding currying a bit more. Below I will explain what currying is, why it is used, and provide a clear and concise example you can run as well. I believe this will help alleviate some of the confusion you have. If you still have questions after, please let me know so we can tackle it another way if need be.


# What Is Currying?
Before we get into what currying is, I'll give a quick reminder on functional programming. Functional programming would be style of writing syntax, this involves functions in many aspects such as passing functions as arguments and being able to callback/return a function without "messing up" your code/program. Currying, a process in functional programming, is one way to not only pass but return functions. Currying allows us to take what is a traditional function with multiple arguments and place it into a sequence of nested functions. 

To put this plainly, instead of having our traditional function that takes in multiple arguments at once, a curried function allows us to pass multiple arguments one at a time, sequentially. To explain in steps what happens with a curried function, take a traditional function that has three arguments/parameters:

1. Curried function will grab the first parameter which will then:
2. Return a new function that grabs the second parameter, which will then: 
3. Return a new function that grabs the third parameter:
4. Given the third being the last parameter, it returns the result of applying the function to each of its parameters. (This can be done with fewer or greater parameters as well.)
5. A key thing to note is that a curried function continues until each argument has been met.

# Currying: Why Use It?
1. Currying is useful because it allows for us to create clean and concise looking functions that perform in a sequence and/or particular order.
2. Limits you having to pass the same variable repeatedly.
3. The final result is returned when all parameters have been passed.
4. Easily changed and/or configured.
5. Logic in one essential place to minimize errors and find errors easily if they occur.
  

# Working Example
Please head over to the `currying.js` file as I have provided a detailed example that tackles currying a function line by line. You can do so by clicking [here](currying.js).




