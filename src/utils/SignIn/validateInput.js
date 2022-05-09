import Validator from "validator";

export const validateInput = data => {
    let errors = {}
    if (Validator.isEmpty(data.email.trim())) {
        errors.email = 'Email is required'
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(data.password.trim())) {
        errors.password = 'Password is required'
    } else if (!data.password.match(/[0-9]/g) || !data.password.length >= 8 || !data.password.match(/[A-Z]/g)) {
        errors.password = 'Password is invalid'
    }
    return {
        errors,
        isValid: JSON.stringify(errors) === '{}'
    }
}