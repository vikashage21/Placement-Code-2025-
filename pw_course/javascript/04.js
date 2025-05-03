// learning array method.

let arr =[1,2,3,4]

arr.push(6)

// if you want to add more element in array you can use comma to septate.

// adding value at last index .


arr.push(5,6,4)


console.log(arr)

// array.pop()

let popValue = arr.pop()

console.log(popValue)


// removing the value form start 
// array.shift()


// adding the value from start index of array


arr.unshift(9)

console.log(arr)


// adding two array 

let firstArray =[1,2,3]
let secondArray = [4,5,6]
let thirdArray = firstArray.concat(secondArray)

console.log(thirdArray)

// its return new array and not modify the value of original array .

// array.join() .

let s = thirdArray.join('-')

console.log(s)


firstArray.reverse()

console.log(firstArray)

// finding element by index

console.log(firstArray.indexOf(2))


// array.slice()

console.log(thirdArray.slice(0,3))


// array.splice()

thirdArray.splice(2,1,'hello')

// list of array method are :- 

