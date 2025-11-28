const os = require('os')

console.log(os.hostname())


// it will give in bytes we have to divided 1024 

console.log(os.totalmem() / 1024)

// check the maximum threads can be created by nodejs application

console.log(os.cpus().length)
// --> 4