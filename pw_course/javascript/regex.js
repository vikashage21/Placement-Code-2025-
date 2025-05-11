// learning regex 

// regex means regular expression .

 let pattern = "pw"

 let regExOne = new RegExp(pattern)

 let flag ='gi'

 let regExTwo = new RegExp(pattern, flag)


 let regExThree =  /pw/gi

 const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"

 const result = regExThree.test(strToCheck)

 console.log(result)

 const antherResult  =  strToCheck.match(regExThree) 


 console.log(antherResult)

 const replaceStr = strToCheck.replace(regExThree,'p-w')

 console.log(replaceStr)

 const webUrl = 'https://www.pw.com/hitesh%20choudary'

 const useableUrl = webUrl.replace(/%\d\d/gi , '-')

// \d for number 


 console.log(useableUrl)

//  regexr.com resource