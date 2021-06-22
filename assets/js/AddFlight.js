
function addFlight() {
    event.preventDefault();
    let no = document.getElementById('flightNo').value;
    let airline = document.getElementById('airline').value;
    let date = document.getElementById('date').value;
    let origin = document.getElementById('from').value;
    let destiny = document.getElementById('to').value;
    let departureTime = document.getElementById('departureTime').value;
    let arrivalTime = document.getElementById('arrivalTime').value;
    let economy = document.getElementById('economy').value;
    let business = document.getElementById('business').value;
    let economyPrice = document.getElementById('economyPrice').value;
    let businessPrice = document.getElementById('businessPrice').value;

    const flight = {
        "no": no,
        "airline": airline,
        "date": date,
        "origin": origin,
        "destiny": destiny,
        "departTime": departureTime,
        "arrivalTime": arrivalTime,
        "economy": economy,
        "business": business,
        "economyPrice": economyPrice,
        "businessPrice": businessPrice
    }

    console.log(flight);
    let isFieldsFilled = FlightValidator.checkFormFields(flight);
    if(isFieldsFilled){
        FlightManager.addFlight(flight);
        window.location.href= "add_schedule.html"
    }
    else{
        alert("All fields are mandatory");
    }
}