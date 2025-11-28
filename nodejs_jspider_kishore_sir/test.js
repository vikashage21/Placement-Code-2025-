const { error } = require('console');
const fs = require('fs');
// console.log(process.)

const start = Date.now()

setTimeout(() => {
    console.log('Timer is executing ')  

}, 0);


fs.readFile('../message.txt' , 'utf-8' ,(error , data) =>{
  

    setTimeout(()=>{
        console.log('time 2')
    })
    setImmediate(()=>{
        console.log('immediate 2')
    })
})

setImmediate(()=>{
    console.log('immediate 1')
})

console.log('top level code')
