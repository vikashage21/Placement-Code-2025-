// functions in js

function greet() {
    console.log("Hello World");
}

// creating a square root of function

// parameter

function sqr(x) {
    return Math.sqrt(x);
}


greet()


let a = sqr(8)

// argument is 8


console.log(a)


// function with no parameter and no  return value
function greet() {
    console.log('welcome')
}




function print() {
    return 'i am happy to learn full stack from pw skills '
}


// capture the value of a variable in js using let keyword

let message = print()

// new message 

let newMessage = message + "Enroll now :- Dsa ";


console.log(newMessage)


// function with default parameter

function sum(num, num2 = 10) {
    return num + num

}


let addedNum = sum(10)

// default parameter always given right to left if you mistaken give the parameter the value will be NaN


console.log(addedNum)


// unlimited parameters in functions

function sumOfAllParameters() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {

        sum += arguments[i];



    }
    return sum;
}

let m = sumOfAllParameters(4, 5, 6, 4, 6);

console.log(m)

