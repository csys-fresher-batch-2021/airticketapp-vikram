class AgeCalculator {

    /**
     * This funtion returns the age of the passenger.
     * @param {String} dateOfBirth 
     */
    static calculateAge(dateOfBirth) {
        let birthYear = parseInt(dateOfBirth.substr(0, 4)); //substr() used to cut the string from one index to another.
        let currentYear = this.getCurrentYear();
        return currentYear - birthYear;
    }

    /**
     * This function returns the current year.
     */
    static getCurrentYear() {
        let date = new Date();
        let currentYear = date.getFullYear(); //retrieves only year field from date.
        return currentYear;
    }
}