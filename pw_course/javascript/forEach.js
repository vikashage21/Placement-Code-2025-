let arr =[1,2,3,0,8,9]


arr.forEach((element)=>{
    console.log( 'foreach'+ element)
})

// 360 
// 6th march 2023 15 video

arr.map((items)=>{
    console.log( "map" +items)
})

let reduceValue = arr.reduce((pre , current) => pre  + current , 0)
console.log(reduceValue)
let typeCheck = arr.every((value)=> typeof value === 'number')

console.log(typeCheck)

let fitterValue = arr.filter((item) =>  item >1)

console.log(fitterValue)

let findItem = arr.find((items)=> items > 1)

console.log(findItem)

// difference between find and flitter is that filter will return all the values that are true while find will only return one value. 