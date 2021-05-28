class UserValidator {
    /**
     * This function validates the username and return true if the username is correct or returns false.
     * @param {string} userName 
     */
    static validateUser(userName) {

        //User name field should not be empty.
        if (userName == "" || userName == null) {
            alert("UserName should be filled");
            return false;
        }

        //User name should not contain any numbers.
        if (!isNaN(userName)) {
            alert("Only characters are allowed");
            return false;
        }

        //User name should not exceed the condition.
        if ((userName.length < 2) || (userName.length) > 15) {
            alert("user name must be 2 to 15 characters!");
            return false;
        }
        return true;
    }
}