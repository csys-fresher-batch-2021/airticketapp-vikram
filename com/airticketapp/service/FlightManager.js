let flights = [];
class FlightManager{

    /**
     * This function add flight name to the local storage.
     * param{String} flight.
     */
    static addFlight(flight){
        let flights = this.getAllFlights();
        let length = flights.length;
        if(length > 0){
            let lastElementId = flights[length-1].id;
            flight['id'] = lastElementId + 1;
        }
        else{
            flight['id'] = 1;
        }
        flights.push(flight);
        this.saveToStorage(flights);
        console.log("Flight saved");    
    }

    /**
     * This function retreives all the flight details.
     * return flights.
     */
    static getAllFlights(){
        let flights = JSON.parse(localStorage.getItem("FLIGHTS")) || [];
        return flights;
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
    static removeFlight(flightId){
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);

        if(index != -1){
            flights.splice(index, 1);
        }
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }

    /**
     * This function updates the flight ticket status.
     * param{String} flightName.
     * returns status.
     */
    static updateTicketStatus(flightId){
        let flights = this.getAllFlights();
        let index = flights.indexOf(flightId);
        let status = 'not confirmed';
        if(index != -1){
            status = 'confirmed';
        }
        localStorage.setItem("STATUS", JSON.stringify(status));
        return status;
    }

    /**
     * This function stores and return the booked date.
     * returns date.
     */
    static bookingDate(){
        let today = new Date().toLocaleDateString();
        localStorage.setItem('DATE BOOKED', JSON.stringify(today));
        return today;
    }

    /**
     * Function to store flights to storage.
     * @param {*} flights
     */
    static saveToStorage(flights){
        localStorage.setItem("FLIGHTS", JSON.stringify(flights));
    }
}