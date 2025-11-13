// “Find the number that becomes the largest for the second time while traversing the array from left to right.

let counter = 0;
function findSecondLargest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
            counter++

            if (counter == 2) {
                return largest
            }

        }

    }


}


let arr = [2, 15, 458, 25, 45, 25, 4, 8]


let result = findSecondLargest(arr)

console.log(result)
