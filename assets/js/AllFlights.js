let tableContent = document.getElementById('table-content');

let allFlights = FlightManager.getAllFlights();

displayFlights(allFlights);

/**
 * Function to display all application to table.
 * @param {*} applications 
 */
function displayFlights(flights){
    flights.forEach(element => {
        //creating tr for a application.
        let tr = DynamicElements.createTableRow();
        //creating th for flight Id.
        let th = DynamicElements.createTableHeader(element.id);
        th.id = "id";
        tr.appendChild(th);

        //creating td for flight company name.
        let tdAirline = DynamicElements.createTableData();
        tdAirline.innerText = element.airline;
        tr.appendChild(tdAirline);
        
        //creating td for date.
        let tdDate = DynamicElements.createTableData();
        tdDate.innerText = element.date;
        tr.appendChild(tdDate);

        //creating td for departure place and time.
        let tdDeptPlaceTime = DynamicElements.createTableData();
        tdDeptPlaceTime.innerText = element.deptPlaceTime;
        tr.appendChild(tdDeptPlaceTime);

        //creating td for arrival place and time.
        let tdArrPlaceTime = DynamicElements.createTableData();
        tdArrPlaceTime.innerText = element.arrPlaceTime;
        tr.appendChild(tdArrPlaceTime);

        //creating td for economy seat count.
        let tdEconomy = DynamicElements.createTableData();
        tdEconomy.innerText = element.economy;
        tr.appendChild(tdEconomy);

        //creating td for business seat count.
        let tdBusiness = DynamicElements.createTableData();
        tdBusiness.innerText = element.business;
        tr.appendChild(tdBusiness);

        //creating td for business seat count.
        let tdPrice = DynamicElements.createTableData();
        tdPrice.innerText = element.price;
        tr.appendChild(tdPrice);

        //creating td for button.
        let tdButton = DynamicElements.createTableData();
        //creating button
        let button = DynamicElements.createButton();
        tdButton.appendChild(button);
        tr.appendChild(tdButton);
        //appending tr to tbody tag in html
        tableContent.appendChild(tr);
    });
}

addListenerToButtons();
/**
 * Function to add event listener to all dynamically generated buttons.
 */
function addListenerToButtons(){
    if(document.querySelector('button')){
        document.querySelectorAll('.viewBtn').forEach(function(event){
            event.addEventListener('click', function(e){
                let flightId = e.target.parentNode.parentNode.querySelector('#id').innerText;
                localStorage.setItem("FlightID", flightId);
                window.location.href = "bookingpage.html";
            });
        });
    }
}