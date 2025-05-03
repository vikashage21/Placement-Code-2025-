let single = "red";

if (single == "red") {
    console.log("red => stop")
} else if (single == "green") {
    console.log("green => go")
} else {
    console.log("other => other")
}

switch (single) {
    case "red":
        console.log("red => stop")
        break;

    case "green":
        console.log("green => go")
        break;

    case "":
        console.log("white => break ")
        break;

    default:
        console.log("other => other")
        break;
}


// loops -> for , while , do while


for (let i = 0; i < 10; i++) {
    let element = [i];
    console.log(element)
}

// while loops

let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}

// do while 

let a =0;

do {

  console.log('hello world')
  a++

  break;


} while (a < 10);


// ternary operator

// variable ? true : false;

let isloggedin = true;

isloggedin ? console.log('Home page') : console.log('Login page')

