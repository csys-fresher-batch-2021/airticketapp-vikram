let tableContent = document.getElementById('table-content');

displayTickets();

async function displayTickets(){
    let tickets = await TicketManager.getAllBookedTickets();
    console.log(tickets);
    tickets.forEach(element => {
        //creating tr for a application.
        let tr = DynamicElements.createTableRow();
        //creating th for flight Id.
        let th = DynamicElements.createTableHeader(element.id);
        th.id = "id";
        tr.appendChild(th);

        //creating td for ticket number.
        let tdTicketNo = DynamicElements.createTableData();
        tdTicketNo.innerText = element.ticket_no;
        tr.appendChild(tdTicketNo); 

        //creating td for flight number.
        let tdFlightNo = DynamicElements.createTableData();
        tdFlightNo.innerText = element.flight_no;
        tr.appendChild(tdFlightNo);        

        //creating td for flight company name.
        let tdAirline = DynamicElements.createTableData();
        tdAirline.innerText = element.airline;
        tr.appendChild(tdAirline);
        
        //creating td for date.
        let tdDate = DynamicElements.createTableData();
        tdDate.innerText = element.flight_date.substr(0,10);
        tr.appendChild(tdDate);

        //creating td for departure place and time.
        let tdDeptPlace = DynamicElements.createTableData();
        tdDeptPlace.innerText = element.origin;
        tr.appendChild(tdDeptPlace);

        //creating td for arrival place and time.
        let tdArrPlace = DynamicElements.createTableData();
        tdArrPlace.innerText = element.destiny;
        tr.appendChild(tdArrPlace);

        let tdDeptTime = DynamicElements.createTableData();
        tdDeptTime.innerText = element.depart_time;
        tr.appendChild(tdDeptTime);

        let tdArrTime = DynamicElements.createTableData();
        tdArrTime.innerText = element.arrival_time;
        tr.appendChild(tdArrTime);

        //creating td for seat type.
        let tdSeatType = DynamicElements.createTableData();
        tdSeatType.innerText = element.seat_type;
        tr.appendChild(tdSeatType);

        //creating td for ticket count.
        let tdNoOfTickets = DynamicElements.createTableData();
        tdNoOfTickets.innerText = element.no_of_tickets;
        tr.appendChild(tdNoOfTickets);

        //creating td for adult seat count.
        let tdAdult = DynamicElements.createTableData();
        tdAdult.innerText = element.adult;
        tr.appendChild(tdAdult);

         //creating td for children seat count.
         let tdChildren = DynamicElements.createTableData();
         tdChildren.innerText = element.children;
         tr.appendChild(tdChildren);

         //creating td for children seat count.
         let tdInfant = DynamicElements.createTableData();
         tdInfant.innerText = element.infant;
         tr.appendChild(tdInfant);

         //creating td for price.
         let tdPrice = DynamicElements.createTableData();
         tdPrice.innerText = element.price;
         tr.appendChild(tdPrice);

        //creating td for button.
        // let tdButton = DynamicElements.createTableData();
        // //creating button
        // let button = DynamicElements.createBookButton();
        // tdButton.appendChild(button);
        // tr.appendChild(tdButton);
        //appending tr to tbody tag in html
        tableContent.appendChild(tr);
    });
}