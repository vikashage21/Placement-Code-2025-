// write a function that returns the smallest number in array 

function findSmallest(arr) {
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return smallest;

}
let arr = [10, 5, 2, 1, 0, 2]

const result = findSmallest(arr)

console.log(result)


