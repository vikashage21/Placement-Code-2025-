let arr =[0,2,3,100 ,4,9,10,15]
// find the greater number

let max = arr[0]

for(let i = 1 ; i < arr.length ; i++){
if(arr[i] > max){
    max = arr[i]
}

}

console.log(max)