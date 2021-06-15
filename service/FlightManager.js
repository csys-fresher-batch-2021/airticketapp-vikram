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

    static async updateFlight(oldFlightId, newFlight){
        try {
            let url = "http://localhost:3000/api/flights/" + oldFlightId;
            let result = await axios.put(url, newFlight);
            return result;
        } catch (error) {
            console.log(error.response.data);
        }
    }
    

    /**
     * This function can help the admin to remove the flight.
     * param{String} flightName.
     */
    static async removeFlight(flightId) {
        try {
            let url = "http://localhost:3000/api/flights/" + flightId;
            let result = await axios.delete(url);
            return result;
        } catch (error) {
            console.log(error);
        }
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

    /**
     * Function to get current flight id.
     */
    static getCurrentFlightId(){
        let flightId = JSON.parse(localStorage.getItem('FLIGHTID'));
        return flightId;
    }

    /**
     * Function to get current flight data.
     * @param {*} id 
     */
    static async getFlightData(id){
        let flight;
        flights = await this.getAllFlights();
        console.log(flights);
        for(let i = 0; i < flights.length; i++){
            if(flights[i].id === parseInt(id)){
                flight = flights[i];
                break;
            }
        }
        return flight;
    }
}