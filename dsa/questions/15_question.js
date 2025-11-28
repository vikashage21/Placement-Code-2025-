// find this string is palindrome


const findPalindrome = (str) => {
    let x = 0;
    for (let i = str.length ; i < str.length / 2; i--) {
        if (str[x] == str[i]) {

            console.log(x , i)
            x++
        } else {
            return false
        }

    }

    return true


}

let str = 'ecxce'

let res = findPalindrome(str)


console.log(res)