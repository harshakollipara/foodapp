import UtilityManager from "../UtilityManager";

export default class UIValidation {
    public constructor() {
    }

    //only characters a-z and A-Z
    private REGEX_CHARACTERS = /^[a-zA-Z ]+$/;

    // Alpha Numeric Charcters a-z, A-Z, 0-9
    private REGEX_ALPHA_NUMERIC = /^[a-zA-Z0-9]+$/;

    //email validation
    private REGEX_EMAIL = /^[A-Z0-9_]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;

    // 8 digit AplhaNumeric
    private REGEX_PASSWORD = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;



    /* To handle name validation - only Alphabets*/
    public validateName(nameValue : any) {
        nameValue = nameValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(nameValue)) {
            return false;
        } else if (!this.REGEX_CHARACTERS.test(nameValue)) {
            return false;
        } else {
            return true;
        }
    }

    /* To handle user name validation - only Alpha Numeric value*/
    public validateUserName(usernameValue : any) {
        usernameValue = usernameValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(usernameValue)) {
            return false;
        } else if (!this.REGEX_ALPHA_NUMERIC.test(usernameValue)) {
            return false;
        } else {
            return true;
        }
    }

    /* To handle email validation */
    public validateEmail(emailAddress : any) {
        emailAddress = emailAddress.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(emailAddress)) {
            return false;
        } else if (!this.REGEX_EMAIL.test(emailAddress)) {
            return false;
        } else {
            return true;
        }
    }

    /* To validate password */
    public validatePassword(passwordValue : any) {
        passwordValue = passwordValue.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(passwordValue)) {
            return false;
        } else if (passwordValue.length < 6) {
            return false;
        } else if (!this.REGEX_PASSWORD.test(passwordValue)) {
            return false;
        } else {
            return true;
        }
    }

   
    /*To Validate number*/
    public validatePhoneNumber(phoneNumber : any) {
        var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        phoneNumber = phoneNumber.trim();
        if (UtilityManager.objectValidationInstance.isStringEmpty(phoneNumber)) {
            return false;
        } else if (!phoneRegex.test(phoneNumber)) {
            return false;
        } else {
            return true;
        }
    }

}