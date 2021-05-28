class Validator {

    /**
     * This function validates if the user type any name or not.
     * @param {string} name 
     */
    static validateName(name) {
        if (name == null || name == "") {
            alert("Name field cannot be empty");
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
            alert("Invalid email id");
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
            alert("Invalid mobile number");
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
    static isUserExists(username, password) {
        let savedUsername = JSON.parse(localStorage.getItem("SignedUpUser"))[3];
        let savedPassword = JSON.parse(localStorage.getItem("SignedUpUser"))[4];
        if (username == savedUsername && password == savedPassword) {
            return true;
        }
        else {
            alert("user not exists! Sign up first.");
            return false;
        }
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
}