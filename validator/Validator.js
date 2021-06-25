class Validator {

    /**
     * This function validates if the user type any name or not.
     * @param {string} name 
     */
    static validateName(name) {
        if (name == null || name == "") {
            return false;
        }
        return true;
    }

    /**
     * This function checks the date of birth of the passenger with the pattern defined and returns true if it matches.
     * @param {string} dob 
     */
    static validateDOB(dob) {
        var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/; //date with yyyy-mm-dd
        if (dob == null || dob == "" || !pattern.test(dob)) {
            alert("Invalid date of birth");
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function checks if the user selected any radio button or not.
     * @param {string} gender 
     */
    static validateGender(gender) {
        if (gender == null || gender == "off" || gender == {}) {
            alert("select your gender");
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function validates email and check the mail is in valid format or not.
     * @param {string} email 
     */
    static validateEmail(email) {
        //email can have a-z or A-Z or 0-9 with @ a-z or A-Z or 0-9
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email == null || email == "" || !pattern.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function validates mobile number and returns true if it is valid.
     * @param {number} mobileNo 
     */
    static validateMobileNo(mobileNo) {
        let pattern = /^\d{10}$/; // mobile no with 10 digits.
        if (mobileNo == null || mobileNo == "" || !pattern.test(mobileNo)) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function checks whether the username is registered or not.
     * @param {string} username 
     * @param {string} password 
     */
    static isUserExists(email) {
        let exists = false;
        let signedUser = UserManager.getAllUsers();
        for(let i = 0; i < signedUser.length; i++){
            if(signedUser[i].email === email){
                exists = true;
                break;
            }
        }
        return exists;
    }

    /**
     * This function validates whether the seat type radio button is selected or not.
     * @param {any} seatType 
     */
    static validateSeatType(seatType) {
        if (seatType == null || seatType == "off" || seatType == {}) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * This function validates the username and return true if the username is correct or returns false.
     * @param {string} userName 
     */
    static validateUserName(userName) {
        //User name field should not be empty.
        if (userName == "" || userName == null) {
            return false;
        }
        return true;
    }

    /**
     * This function validates the password with a regular expression. It returns true or false based on validation result.
     * @param {string} passWord 
     */
    static validatePassword(passWord) {
        //Regular expression for pattern matching only 8-15 characters allowed with atleast one lowercase letter and one uppercase letter.
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        //password field should not be empty.
        if (passWord == null || passWord == "") {
            alert("password field should be filled.");
            return false;
        }

        //password should match the given condition.
        if (!(passWord.match(passwordRegex))) {
            alert("Password must contain atleast 8 to 15 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            return false;
        }
        return true;
    }
}