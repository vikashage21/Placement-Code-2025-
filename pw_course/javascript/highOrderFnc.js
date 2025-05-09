// high order function


let calc = (n) => {
    let firstNum = (m) => {
        let twoNum = (s) => {
            let total = n + m + s;
            return total
        }
        return twoNum
    }
    return firstNum

}


console.log(calc(5)(10)(15))