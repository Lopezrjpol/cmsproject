const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if(Validator.isEmpty(data.name)){
        errors.name = "Username field is required";

    } if(!Validator.isLength(data.name, {min: 6, max: 15})){
        errors.name = "Username must be minimum of 6 and maximum of 15 characters";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";

    } else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field is required";
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = "Password must be atleast 6 characters";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords not match";
    }
    
    return {
        errors, isValid: isEmpty(errors)
    };

};