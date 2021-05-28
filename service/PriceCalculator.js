class PriceCalculator {
    /**
     * This funtion books ticket with age as the parameter.
     * @param {number} age 
     * @param {number} flightFare 
     */
    static calculatePrice(age, flightFare) {
        let price = 0;
        if (age >= 2 && age <= 13) {
            price = flightFare / 2; //50 % discount for children.
        }
        if (age > 13) {
            price = flightFare; //same fare for adults.
        }
        if (age < 2) {
            price = 0; //no charge for infants.
        }
        if (age > 60) {
            price = flightFare / 2; // 50% discount for senior citizen.
        }
        return price;
    }
}