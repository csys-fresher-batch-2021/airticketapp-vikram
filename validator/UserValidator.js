class UserValidator {
    /**
     * Function to validate email and password.
     * @param {*} email 
     * @param {*} password 
     */
    static async authenticateUser(user) {
        let validUser = false;
        let status = await UserManager.getUserByMail(user);
        if(status.length > 0){
            localStorage.setItem("CLIENT_TOKEN", JSON.stringify(status[0].token));
            validUser = true;
        }
        // for (let i = 0; i < SignedUpUsers.length; i++) {
        //     if ((SignedUpUsers[i].email === email) && (SignedUpUsers[i].password === password)) {
        //         validUser = true;
        //         break;
        //     }
        // } 
        return validUser;
    }   
}