let deleteBtn = document.getElementById('deleteBtn');
let updateBtn = document.getElementById('updateBtn');

setFlightDetails();

updateBtn.addEventListener('click', function(){
    window.location.href = "UpdateFlight.html";
});

deleteBtn.addEventListener('click', async function(){
    let flightId = FlightManager.getCurrentFlightId();
    let result = await FlightManager.removeFlight(flightId);
    if(result.status == 200){
        alert('Flight removed');
        window.location.href = "view_schedule.html";
    } 
    else{
        console.log("Something is wrong");
    }    
});

async function setFlightDetails(){
    let flightId = FlightManager.getCurrentFlightId();
    console.log(flightId);
    let flight = await FlightManager.getFlightData(flightId);
    console.log(flight);
    document.getElementById('flightNo').innerText = flight.flight_no;
    document.getElementById('airline').innerText = flight.airline;
    document.getElementById('date').innerText = flight.flight_date.substr(0, 10);
    document.getElementById('origin').innerText = flight.origin;
    document.getElementById('destiny').innerText = flight.destiny;
    document.getElementById('departTime').innerText = flight.depart_time;
    document.getElementById('arrivalTime').innerText = flight.arrival_time;
    document.getElementById('economy').innerText = flight.economy;
    document.getElementById('business').innerText = flight.business;
    document.getElementById('economyPrice').innerText = flight.economy_price;
    document.getElementById('businessPrice').innerText = flight.business_price;
}