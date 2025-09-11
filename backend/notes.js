// let userName = 'abc';
// let age = 23;
// let emp = {
//     userName,
//     age

// } 



// ! fs modules

// using js, we can interact with file and folders.
// interaction - crud

// let fs = require('fs')


// console.log(fs)

// fs operations synchronously

// creating a filename

// method name = wirtefilesync

// syntax => writeFileSync('path/filename.ext', 'data')

// "data" => data which needs to passed

console.log(1)
console.log(2)
fs.writeFileSync('./demo.txt', 'hello world')
// if the file is already present at the path, then the data will be over-written 
// if the file is already present at the path , then the data will ne over-written
// fs.writeFileSync('./demo.txt','hello world2')

console.log('files created');
console.log(3)


// ? reading a file
// method name = readFileSync
// syntax => let data = readFileSync('./notes.js')
// console.log(data)


let data = fs.readFileSync('./demo.txt')

console.log(data)
// buffer is an array , which stores binary data (character set)


console.log(data.toString('utf-8'))

// todo : buffer and streams


// ! =========== updating /appending a  files ==============


// methods name = appendFileSync()
// syntax name => fs.appendFileSync('./demo.txt')

fs.appendFileSync('./demo.txt', '\n this is the end of the file')

console.log('file updated')

console.log(4)


// ~ if the file is not present at the path , then a new file will get created with the passed data
// ~ if the file is already present , then dta will get appended.

// 



fs.readFile('./notes.js','utf-8',(err,data)=>{
    if(err){
        console.log('file reading complete')
        console.log(data)
    }
})


// appending a file

// method name = fs.appendFile("path", "data" , callback) 

// format => appendFile('path' ,"data",callback)


fs.appendFile('./notes.js',"\n this is new data",(err)=>{
    if(err) console.log(err)
        console.log('file appended')
})

// deleting the file
// method name => unlink()


// creating a folder
// method name =>mkdir()

// deleting a folder
// method name => rmdir
// renaming 

// method name => rename()

//  fs operation asynchronously (using promise -> then / cath)

let fs = require('fs/promises')

let = require('fs').promises

// creating a file

// method name => readFile()

// format =>readFile('path/name',data)

let res = fs.writeFile('./demo.txt','this is text data')


console.log(res)

