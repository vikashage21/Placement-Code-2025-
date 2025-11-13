// write a function that return the number of negative numbers in an arrays

function countNegative(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            x++
        }
    }


    return x;




}



let arr = [2, -0, 9, -17, 15, -1, -4]

const result = countNegative(arr)

console.log(result)