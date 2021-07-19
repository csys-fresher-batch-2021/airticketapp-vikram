let users = [];

class UserManager {

    /**
     * Function to add new user.
     * @param {*} user 
     */
    static async addUser(user) {
        try {
            let url = "http://localhost:3000/api/v1/signup";
            let result = await axios.post(url, user);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to retrieve all Users.
     */
    static getAllUsers() {
        let users = JSON.parse(localStorage.getItem("USERS")) || [];
        return users;
    }

    /**
     * Function to get user by mail.
     * @param {*} user 
     */
    static async getUserByMail(user){
        try {
            let url = "http://localhost:3000/api/v1/login";
            let result = await axios.post(url, user);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
}