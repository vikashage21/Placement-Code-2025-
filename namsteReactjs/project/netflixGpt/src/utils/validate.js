import { regexEmail, regexPassword } from "../constant/const.js";

export const checkValidate = (email, password)=>{

    regexPassword.test(password)

    if (!regexEmail.test(email)) {
        return "Email is not valid"
    } else if (!regexPassword.test(password)) {
        return "Password is not valid"
    } else {
        return null
    }

}

