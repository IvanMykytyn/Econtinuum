import Validator from "validator";

export const validateInput = data => {
    let errors = {}

    if (Validator.isEmpty(data.first_name.trim())) {
        errors.first_name = 'First name is required'
    }
    if (Validator.isEmpty(data.last_name.trim())) {
        errors.last_name = 'Last name is required'
    }
    if (Validator.isEmpty(data.email.trim())) {
        errors.email = 'Email is required'
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(data.day)) {
        errors.day = 'Day is required'
    } else if (!(data.day >= 1 && data.day <= 31)) {
        errors.day = 'Day is invalid'
    }
    if (Validator.isEmpty(data.month)) {
        errors.month = 'Month is required'
    } else if (!(data.month >= 1 && data.month <= 12)) {
        errors.month = 'Month is invalid'
    }
    if (Validator.isEmpty(data.year)) {
        errors.year = 'Year is required'
    } else if (!(data.year >= 1960 && data.year <= new Date().getFullYear())) {
        errors.year = 'Year is invalid'
    }

    if (Validator.isEmpty(data.password.trim())) {
        errors.password = 'Password is required'
    } else if (!data.password.match(/[0-9]/g) || !data.password.length >= 8 || !data.password.match(/[A-Z]/g)) {
        errors.password = 'Password is invalid'
    }
    if (Validator.isEmpty(data.confirmPassword.trim())) {
        errors.confirmPassword = 'Confirm password is required'
    } else if (!data.password.match(/[0-9]/g) || !data.password.length >= 8 || !data.password.match(/[A-Z]/g)) {
        errors.confirmPassword = 'Confirm password is invalid'
    }
    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match';
    }
    return {
        errors,
        isValid: JSON.stringify(errors) === '{}'
    }
}