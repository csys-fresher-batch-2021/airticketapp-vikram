let payBtn = document.getElementById('payBtn');
let printBtn = document.getElementById('printBtn');

payBtn.addEventListener("click", function () {
    alert("Payment still on progress");
});

printBtn.addEventListener("click", function () {
    printBtn.hidden = false;
    if (!printBtn.hidden) {
        printBtn.hidden = true;
    }
    window.print();
});

setTicketDetails();

async function setTicketDetails() {
    let flightId = StorageManager.getFromStorage("USERFLIGHTID");
    let seat = StorageManager.getFromStorage('Seat');
    let ticketBooked = StorageManager.getFromStorage('TicketCount');
    let adults = StorageManager.getFromStorage('Adults');
    let children = StorageManager.getFromStorage('Children');
    let infant = StorageManager.getFromStorage('Infant');
    let price = StorageManager.getFromStorage('Price');
    let data = await FlightManager.getFlightData(flightId);
    console.log(data);
    // set ticket value
    document.getElementById('flightId').innerHTML = data.flight_no;
    document.getElementById('airline').innerHTML = data.airline;
    document.getElementById('date').innerHTML = data.flight_date.substr(0, 10);
    document.getElementById('origin').innerHTML = data.origin;
    document.getElementById('destiny').innerHTML = data.destiny;
    document.getElementById('departTime').innerHTML = data.depart_time;
    document.getElementById('arrivalTime').innerHTML = data.arrival_time;
    document.getElementById('seatType').innerHTML = seat;
    document.getElementById('noOfTickets').innerHTML = ticketBooked;
    document.getElementById('adult').innerHTML = adults;
    document.getElementById('children').innerHTML = children;
    document.getElementById('infant').innerHTML = infant;
    document.getElementById('price').innerHTML = price;
}