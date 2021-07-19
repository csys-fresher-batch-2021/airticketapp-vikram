class TicketManager{
    /**
     * Function to book ticket.
     * param{String} ticket.
     */
    static async bookTicket(ticket) {
        try {
            let url = "http://localhost:3000/api/v1/tickets/";
            let token = this.getClientToken();
            let config = {headers: {authorization: "Bearer " + token}};
            let result = await axios.post(url, ticket, config);
            return result;
        } catch (err) {
            console.error(err.response);
            return err.response;
        }
    }

    /**
     * Function to all booked tickets.
     * return tickets.
     */
    static async getAllBookedTickets() {
        try {
            let url = "http://localhost:3000/api/v1/tickets/";
            let result = await axios.get(url);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to get token from the client.
     */
    static getClientToken(){
        return JSON.parse(localStorage.getItem('CLIENT_TOKEN')); 
    }
}
