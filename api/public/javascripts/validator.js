const USERNAME = 1;
const PASSWORD = 2;

const USERNAME_LENGTH = 8;
const MIN_PASSWORD_LENGTH = 8;

class Validator {
    constructor() {}

    validate(input, type) {
        switch(type) {
            case USERNAME:
                return (/^[\w]+$/.test(input) && (input.length === USERNAME_LENGTH));
            case PASSWORD:
                return (/^[\w!@#\$%\^&\*]+$/.test(input) && (input.length >= MIN_PASSWORD_LENGTH));
            default:
                return false;      
        }
    }
}

module.exports = {
    Validator: Validator,
    USERNAME: USERNAME,
    PASSWORD: PASSWORD,
}