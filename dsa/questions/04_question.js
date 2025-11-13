// write a function to find you are eligible to vote

function verifyAge(age) {
    let res = age > 18 ? "you are eligible to vote" : "you are not eligible"

    return console.log(res)
}

verifyAge(55)