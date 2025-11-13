// find the even number in this array and push in new array

let arr = [15, 16, 14, 25, 1, 5, 14, , 45]

let evenArr = []
let j = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenArr[j] = arr[i]
        j++
    }
}

console.log(evenArr)

