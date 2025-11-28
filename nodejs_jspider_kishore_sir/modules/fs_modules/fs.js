const fs = require('fs')

// creating a file sync

const data = 'hello world form node js'


fs.writeFileSync('./message.txt', data, 'utf-8')


//  reading the file

const res = fs.readFileSync('./message.txt', 'utf-8')

console.log(res)


// creating a file with async 
const content = ' hello world again'

fs.writeFile('./test.txt', content, 'utf-8', (error, data) => {
    if (error) throw error
    else {
        console.log('file is created')
    }
})


fs.readFile('./test.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    else {
        console.log(data)
    }
})



// delete the file

fs.unlink('./message.txt')

// copy the file

fs.copyFile('./message.txt')