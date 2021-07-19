class PaymentManager {
    /**
     * Function to store card details.
     * @param {*} card 
     */
    static async storeCardDetails(cardDetails) {
        try {
            let url = "http://localhost:3000/api/v1/card/";
            let result = await axios.post(url, cardDetails);
            return result;
        } catch (error) {
            console.log(error.response);
        }
    }
}