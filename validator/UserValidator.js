class UserValidator {
    /**
     * Function to validate email and password.
     * @param {*} email 
     * @param {*} password 
     */
    static authenticateUser(email, password) {
        let validUser = false;
        let SignedUpUsers = UserManager.getAllUsers();
        for (let i = 0; i < SignedUpUsers.length; i++) {
            if ((SignedUpUsers[i].email === email) && (SignedUpUsers[i].password === password)) {
                validUser = true;
                break;
            }
        }
        return validUser;
    }
}