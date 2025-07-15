// let userName = 'abc';
// let age = 23;
// let emp = {
//     userName,
//     age

// } 



// fs modules

// using js, we can interact with file and folders.
// interaction - crud

let fs = require ('fs')


console.log(fs)

// fs operations synchronously

// creating a filename

// method name = wirtefilesync

// syntax => writeFileSync('path/filename.ext', 'data')

// "data" => data which needs to passed

console.log(1)
console.log(2)
fs.writeFileSync('./demo.txt','hello world')
console.log('files created');
console.log(3)



