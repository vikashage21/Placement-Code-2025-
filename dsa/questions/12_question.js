//  write a function to find out second largest number in the array.




function secondLargest(arr) {

    let firstLargest = -Infinity;
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]


        }
    }

    return secondLargest


}



let arr = [4, 9, 0, 2, 8, 7, 1]


let res = secondLargest(arr)

console.log(res)