let x = 10
let y = 20
console.log(`before :` + x, y)
let temp = x

x = y

y = temp

console.log("after" + x, y)

function reverseStr(str) {
  let reverse = " "

  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse
  }
  console.log(reverse)
}

reverseStr("mango")


function palindromeCheker(str){
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

let check = palindromeCheker("amm00kdjda")

console.log(check)