/*   ------------------------Overview ------------------------
Function Scope
Function Syntaxes
Callbacks
Higher Order Functions

        ------------------------Scope ------------------------
“Scope” is a variable’s accessibility. Prior to this lecture, most of what we have dealt with has been on the outer scope, however, with functions (as well as if-statements and for loops), an inner scope is created. Let’s look at some examples of this.
*/

let age = 21

function logDetails() {
  let name = 'Tyler'
  console.log(`My name is ${name} and I am ${age}.`)
}
/*This works just fine. By nature, we always have access to our current scope and outer scope. In this case, our console.log has access to name, because it is in the current scope, and it has access to age, because it is in the outer scope.*/

let age = 21

function logDetails() {
  let name = 'Tyler'
}

console.log(`My name is ${name} and I am ${age}.`)
T
/*his does not work. At this point, our console.log has access to age because it is on the same level, however, name is now in the inner scope of our function (one level lower).*/

/* ------------------------Other Function Syntaxes ------------------------
In JavaScript, there are 3 syntaxes to write a functions:
   function declaration
    function expression
    arrow function

They each load and behave a little differently from each other
the details are more of an intermediate topic

------------------------Declaration ------------------------
this is the traditional way to write functions that we’ve been using */

function giveMeFive() {
    return 5
}
// ------------------------Expression ------------------------
//function expressions are saved to variables

const sayHi = function() {
    return 'Hi!'
}
/*To remembering the Difference Between Declaration and Expression think of how a function expression has an equals sign. Expression and equal both start with “E”.

 ------------------------Arrow ------------------------
arrow functions are a shorter way of writing function expressions and they are especially convenient for writing functions in-line*/

const sayBye = () => {
    return 'Bye!'
}

/* ------------------------Arrow Functions ------------------------
    Parameters
         arrow functions accept parameters just like any other function
         parameters must be in parentheses unless there is exactly one
         you can still include them even if there is only one parameter. */

const returnParam = item => {
    return item
}
///////////////////////////////////////
const makeArr = (one, two, three) => {
    let arr = [one, two, three]
    return arr
}
/* ------------------------Implicit Return ------------------------
if you have a function that doesn’t require many steps, you can write one-line arrow functions. We don’t have to explicitly use the return keyword in one-line arrow functions */

const giveMeFive = () => 5

const addFive = num => num + 5
/*--------------------More Details on Implicit Returns----------------------
If you are returning an object in a one-line function, you need to wrap the object’s curly braces in parentheses so that they’re not mistaken for the curly braces that hold function blocks.m*/

const makePriceObj = number => ({price: number})
/* You can also wrap implicit returns in parentheses and still have them on a new line. This might seem like a weird strategy but could come in handy when you’re returning something like an object or even another function or some HTML! */

const makeLargeObj = (str, num, arr) => (
    {
        word: str,
        integer: num,
        list: arr
    }
)

/* ------------------------Callbacks ------------------------
A callback is a function that is passed to another function and invoked within the outer function.
Being a callback doesn’t change anything about a function’s definition, it’s just a different way of using the function.

Like many subjects in more intermediate and advanced programming, “callback” is a specific name for a certain pattern

Why use callbacks?
    They make the outer functions more flexible!
    Functions in general help code to be more reusable
    They are required by other functions

------------------------How do we use callbacks? -----------------------------
One way is to define the callback outside of the function where it will be invoked

Let’s check what that looks like with arrow functions as well as function declarations*/
const innerFn = () => 'I am a callback!'
const anotherInner = () => 'Hello there'
const outerFn = callback => console.log(callback())

outerFn(innerFn)
outerFn(anotherInner)
////////////////////////////////////////////////////

function innerFn() {
    return 'I am a callback!'
}

function anotherInner() {
    return 'Hello there'
}

function outerFn(callback) {
    console.log(callback())
}

outerFn(innerFn)
outerFn(anotherInner)

/*Another way is to write a callback function is inline when you invoke the outer function. Let’s call the function we had before, passing in a callback inline*/

// fn expression
const outerFn = function(callback) {
    console.log(callback())
}
outerFn(function() {
    return 'This is a string'
})// passing in an anonymous function (it's not saved anywhere, so it doesn't have a name)
//////////////////////////////////

function outerFn(callback) {    // function declaration
    console.log(callback())
}

outerFn(() => 'Fancy pants string') // passing in an anonymous arrow function

/*------------------------Flexibility------------------------
In both of the examples above, we were able to call an outer function multiple times passing in different callbacks! Callbacks allow us to separate out some functionality so that we don’t have to repeat it. And means that that outer functions can do different things by calling different callbacks. Pretty fancy!

------------------------Higher Order Functions------------------------
A higher order function is a function that takes 1+ function(s) as an argument and/or returns a function. They have similar benefits to callbacks: flexibility and reusability. You’ve already seen them: they’re the outer functions in the callback examples. We will talk more about higher order functions in subsequent lectures

------------------------Receiving Functions as Arguments------------------------
This the more common form, and one we’ll use often throughout Foundations. All of the outer functions in the callbacks examples were this type of higher order function.

------------------------Returning Functions------------------------
Functions that return other functions are like function factories, similar to how Classes create Objects
The returned (inner) function has access to the outer function’s parameters */

const createAdder = x => (y) => x + y

/*There's the same function written as a declaration
function createAdder(x) {
   return function(y) {
       return x + y
   }
} */

const addFive = createAdder(5)
const addTen = createAdder(10)

addFive(12) // output: 17
addFive(40) // output: 45
addTen(3) // output: 13