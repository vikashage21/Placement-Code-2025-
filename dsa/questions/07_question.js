// write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

//  aligning the index 


function searchElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1

}

// testing my code


let arr = [4, 5, 2, 0, 10, 8]

const result = searchElement(arr, 4)

console.log(result)

// searchElement(arr , 4) =>0
// searchElement(arr,10) =>3
// searchElement(arr ,4p)=>-1