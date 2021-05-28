let economyPrice = 4200;
let businessPrice = 4800;
let economyType = "Economy";
let businessType = "Business";

class PriceEstimator {

    /**
     * This function calculates and returns the estimated price for adults.
     * @param {number} noOfTickets 
     * @param {string} seatType 
     */
    static estimatedPriceForAdults(noOfTickets, seatType) {
        let adultPrice = 0;
        if (seatType == economyType) {
            adultPrice = economyPrice * noOfTickets;
        }
        if (seatType == businessType) {
            adultPrice = businessPrice * noOfTickets;
        }
        return adultPrice;
    }

    /**
     * This function calculates the price for children and senior sitizen.
     * @param {number} noOfTickets 
     * @param {string} seatType 
     */
    static estimatedPriceForChildren(noOfTickets, seatType) {
        let normalPrice = 0;
        if (seatType == economyType) {
            normalPrice = economyPrice * noOfTickets;
        }
        if (seatType == businessType) {
            normalPrice = businessPrice * noOfTickets;
        }
        let price = normalPrice / 2;
        return price;
    }

    /**
     * This function returns the price for infants.
     */
    static estimatedPriceForInfants() {
        return 0;
    }

    /**
     * This function adds all the price of adults, children and infants.
     * @param {number} adults 
     * @param {number} children 
     * @param {number} infants 
     */
    static calculatePrice(adults, children, infants) {
        let total = adults + children + infants;
        return total;
    }
}
