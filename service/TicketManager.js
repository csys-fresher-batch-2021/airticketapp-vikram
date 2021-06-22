class TicketManager{
    /**
     * Function to book ticket.
     * param{String} ticket.
     */
    static async bookTicket(ticket) {
        try {
            let url = "http://localhost:3000/api/v1/tickets/";
            let result = await axios.post(url, ticket);
            return result;
        } catch (err) {
            console.log(err);
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
}