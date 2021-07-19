let bookButton = document.getElementById('bookButton');
let flightId = StorageManager.getFromStorage('USERFLIGHTID');
console.log(flightId);
let flightData = FlightManager.getFlightData(flightId);
flightData.then(n => document.getElementById('flightid').value = n.flight_no);

bookButton.addEventListener("click",function () {
    event.preventDefault();
    let noOfTicketsValue = document.getElementById('mySelect').value;
    let adultsValue = document.getElementById('noOfAdults').value;
    let childrenValue = document.getElementById('noOfChildren').value;
    let infantValue = document.getElementById('noOfInfants').value;

    let noOfTickets = JSON.parse(noOfTicketsValue);
    let adultsCount = JSON.parse(adultsValue);
    let childrenCount = JSON.parse(childrenValue);
    let infantCount = JSON.parse(infantValue);

    console.log(adultsCount, childrenCount, infantCount);
    let totalCount = adultsCount + childrenCount + infantCount;
    let seatType = document.querySelector('input[name="seatType"]:checked');
    let isTypeChecked = Validator.validateSeatType(seatType);

    if (isTypeChecked) {
        if (totalCount == noOfTickets) {
            let adultPrice = PriceEstimator.estimatedPriceForAdults(adultsCount, seatType.value);
            let childrenPrice = PriceEstimator.estimatedPriceForChildren(childrenCount, seatType.value);
            let infantPrice = PriceEstimator.estimatedPriceForInfants(infantCount, seatType.value);
            let calculatedPrice = PriceEstimator.calculatePrice(JSON.parse(adultPrice), JSON.parse(childrenPrice), JSON.parse(infantPrice));

            StorageManager.saveToStorage("Seat", seatType.value);
            StorageManager.saveToStorage("TicketCount", noOfTickets);
            StorageManager.saveToStorage("Adults", adultsCount);
            StorageManager.saveToStorage("Children", childrenCount);
            StorageManager.saveToStorage("Infant", infantCount);
            StorageManager.saveToStorage("Price", calculatedPrice);
            bookTicket();
        }
        else {
            alert("Ticket count not matching");
        }
    }
    else {
        alert("Choose your seat type");
    }
});

async function bookTicket() {
    let flightDetails = await FlightManager.getFlightData(flightId);
    console.log("Booking",flightDetails);
    let flightNo = flightDetails.flight_no;
    let airline = flightDetails.airline;
    let date = flightDetails.flight_date;
    let origin = flightDetails.origin;
    let destiny = flightDetails.destiny;
    let departTime = flightDetails.depart_time;
    let arrivalTime = flightDetails.arrival_time;
    let seatType = StorageManager.getFromStorage("Seat");
    let noOfTickets = StorageManager.getFromStorage("TicketCount");
    let adult = StorageManager.getFromStorage("Adults");
    let children = StorageManager.getFromStorage("Children");
    let infant = StorageManager.getFromStorage("Infant");
    let price = parseInt(StorageManager.getFromStorage("Price"));

    const ticket = {
        "no": flightNo,
        "airline": airline,
        "date": date,
        "origin": origin,
        "destiny": destiny,
        "depart": departTime,
        "arrival": arrivalTime,
        "seatType": seatType,
        "noOfTickets": noOfTickets,
        "adult": adult,
        "children": children,
        "infant": infant,
        "price": price
    };

    const result = await TicketManager.bookTicket(ticket);
    console.log(result);
    if(result.status === 200){ 
        window.location.href = "ticket.html"; 
    }
    else if(result.status == 401){
        alert("Session expired");
        window.location.href = "login.html";
    }
    else{
        alert(result.data);
    }
}