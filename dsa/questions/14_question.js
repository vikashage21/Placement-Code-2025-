// write a program to reverse the string without using inbuild functions

function reverseStr(str) {
  let length = str.length - 1;
  let reverseStr = '';
  for (let i = length; i >= 0; i--) {

    reverseStr += str[i]



  }
  return reverseStr



}


let str = "vikash"


let res = reverseStr(str)

console.log("you revesred string  " + res)