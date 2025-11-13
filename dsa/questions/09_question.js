// write a function that returns the largest number in an array

function findLargest(arr) {
    let max = arr[0]
    // first element of array

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i] 
        }
    }
    return max;

}

let arr = [5, 0, 7, 10, 100, 2, 15, 78]

const res =findLargest(arr)

console.log(res)