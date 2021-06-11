let flights = [];
class FlightManager {

    /**
     * This function add flight name to the local storage.
     * param{String} flight.
     */
    static async addFlight(flight) {
        try {
            let url = "http://localhost:3000/api/flights/";
            let result = await axios.post(url, flight);
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * This function retreives all the flight details.
     * return flights.
     */
    static async getAllFlights() {
        // let flights = JSON.parse(localStorage.getItem("FLIGHTS")) || [];
        // return flights;

        try {
            let url = "http://localhost:3000/api/flights";
            let result = await axios.get(url);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    // static getFlight(flightId){
    //     let flight;
    //     let flights = this.getAllFlights();
    //     for(let i = 0; i < flights.length; i++)
    // }

    /**
     * This function can help the admin to remove the flight.
     * param{String} flightName.
     */
    static removeFlight(flightId) {
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);

        if (index != -1) {
            flights.splice(index, 1);
        }
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }

    /**
     * This function updates the flight ticket status.
     * param{String} flightName.
     * returns status.
     */
    static updateTicketStatus(flightId) {
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);
        let status = 'not confirmed';
        if (index != -1) {
            status = 'confirmed';
        }
        localStorage.setItem("STATUS", JSON.stringify(status));
        return status;
    }

    /**
     * This function stores and return the booked date.
     * returns date.
     */
    static bookingDate() {
        let today = new Date().toLocaleDateString();
        localStorage.setItem('DATE BOOKED', JSON.stringify(today));
        return today;
    }

    /**
     * Function to store flights to storage.
     * @param {*} flights
     */
    static saveToStorage(flights) {
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }
}