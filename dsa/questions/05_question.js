// check the number is even or odd or invalid number


function isEven(num) {
    if (num % 2 == 0) {
        console.log('it is an even ', num)
    } else if (num < 0) {
        console.log('enter valid number')
    }
    else {
        console.log('it is not even number')
    }
}

isEven(-9)