const path = require('path')

const mypath = 'assests/img/image.jpeg';

// printing the basename
console.log(path.basename(mypath))
// printing dirname
console.log(path.dirname(mypath))
// printing extensions name

console.log(path.extname(mypath))
// use of path method join the two path

console.log(path.join('src','public'+mypath))

// checking the filename

console.log(__dirname)
// it is variable which is given by the path module to show directory name.
console.log(__filename)


// it is a variable which is given by path module to show the filename of file
