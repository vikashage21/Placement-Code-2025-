// ==========================================
// spread operator


const oneArray = [1, 2, 4, 5, 9]
const twoArray = [3, 6, 8, 10, 45]

// const threeArray = oneArray.concat(twoArray)

const threeArray = [...oneArray, ...twoArray]




console.log(threeArray)


// let printvalue = []

// function testOne() {

//     for (let i = 0; i < arguments.length; i++) {
//         printvalue[i] = arguments[i]

//     }

// }




// testOne(4, 5, 6, 7)

// console.log(printvalue)


// rest operator
function manyArgument(){

    console.log(typeof arguments)

    let args = Array.from(arguments)
    console.log(args)
    let finalArr = args.map((e)=> e)
    console.log(finalArr)
}

manyArgument(1,4,5,6,7,8)


function manyArgument2(...args){

    console.log(typeof args)
    let finalArr = args.map((e)=> e)
    console.log(finalArr)
}

manyArgument2(4,5,6)


// =====================================

const names =["superMan" , "flash"]

const newNames =['batMan' , ...names,'thor']


const sitename = 'pwskills'

console.log([...sitename])


function pwskills (...values){
    return values
}
 
console.log(pwskills('superman', 'flash'e))