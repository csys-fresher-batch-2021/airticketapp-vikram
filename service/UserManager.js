let users = [];

class UserManager {

    /**
     * Function to add new user.
     * @param {*} user 
     */
    static addUser(user) {
        users = this.getAllUsers();
        // let length = users.length;
        // if(length > 0){
        //     let lastElementId = users[length-1].id;
        //     user['id'] = lastElementId + 1;
        // } else{
        //     user['id'] = 1;
        // }
        users.push(user);
        this.saveUsers(users);
    }

    /**
     * Function to retrieve all Users.
     */
    static getAllUsers() {
        let users = JSON.parse(localStorage.getItem("USERS")) || [];
        return users;
    }

    static saveUsers(users) {
        localStorage.setItem("USERS", JSON.stringify(users));
    }
}