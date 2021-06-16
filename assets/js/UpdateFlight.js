let flightId = FlightManager.getCurrentFlightId();
console.log(flightId);
/**
 * Function to store the updated flight details to storage.
 */
async function updateFlight() {
    event.preventDefault();
    let flightNo = document.getElementById('flightNo').value;
    let airline = document.getElementById('airline').value;
    let date = document.getElementById('date').value;
    let origin = document.getElementById('from').value;
    let destiny = document.getElementById('to').value;
    let departTime = document.getElementById('departureTime').value;
    let arrivalTime = document.getElementById('arrivalTime').value;
    let economy = document.getElementById('economy').value;
    let business = document.getElementById('business').value;
    let economyPrice = document.getElementById('economyPrice').value;
    let businessPrice = document.getElementById('businessPrice').value;

    const updatedFlight = {
        "no": flightNo,
        "airline": airline,
        "date": date,
        "origin": origin,
        "destiny": destiny,
        "departTime": departTime,
        "arrivalTime": arrivalTime,
        "economy": economy,
        "business": business,
        "economyPrice": economyPrice,
        "businessPrice": businessPrice
    };

    let isFilled = FlightValidator.checkFormFields(updatedFlight);
    let isNoValid = FlightValidator.validateNumber(flightNo);
    let isAirlineValid = FlightValidator.validateTextData(airline);
    let isOriginValid = FlightValidator.validateTextData(origin);
    let isDestinyValid = FlightValidator.validateTextData(destiny);
    let isDeptTimeValid = FlightValidator.validateTime(departTime);
    let isArrTimeValid = FlightValidator.validateTime(arrivalTime);
    let isEconomyValid = FlightValidator.validateNumber(economy);
    let isBusinessValid = FlightValidator.validateNumber(business);
    let isEcoPriceValid = FlightValidator.validatePrice(economyPrice);
    let isBusPriceValid = FlightValidator.validatePrice(businessPrice);

    if (isBusPriceValid && isEcoPriceValid && isBusinessValid && isEconomyValid && isArrTimeValid && isDeptTimeValid && isDestinyValid && isOriginValid && isAirlineValid && isNoValid && isFilled) {
        let result = await FlightManager.updateFlight(flightId, updatedFlight);
        console.log(result);
        window.location.href = "view_schedule.html";
    } else if (!isBusPriceValid && !isEcoPriceValid) {
        alert('Invalid price. Minimum 4 digits needed');
    } else if (!isEconomyValid && !isBusinessValid) {
        alert('Invalid seat count. Minimum 3 digits needed.');
    }
    else if (!isDeptTimeValid && !isArrTimeValid) {
        alert('Invalid time format.');
    }
    else if(!isAirlineValid && !isOriginValid && !isDestinyValid){
        alert('Invalid text data.');
    }
    else if(!isNoValid){
        alert('Invalid Flight Number');
    }
}

fillDetailsToForm();

/**
 * Function to fill job details to form for updating purpose.
 */
async function fillDetailsToForm() {
    let flight = await FlightManager.getFlightData(flightId);
    document.getElementById('flightNo').value = flight.flight_no;
    document.getElementById('airline').value = flight.airline;
    document.getElementById('date').value = flight.flight_date.substr(0, 10);
    document.getElementById('from').value = flight.origin;
    document.getElementById('to').value = flight.destiny;
    document.getElementById('departureTime').value = flight.depart_time;
    document.getElementById('arrivalTime').value = flight.arrival_time;
    document.getElementById('economy').value = flight.economy;
    document.getElementById('business').value = flight.business;
    document.getElementById('economyPrice').value = flight.economy_price;
    document.getElementById('businessPrice').value = flight.business_price;
}