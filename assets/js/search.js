let searchBtn = document.getElementById('searchBtn');

async function search() {
    let date = document.getElementById('date').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let searchData = {
        "date": date,
        "origin": from,
        "destiny": to
    };
    StorageManager.saveToStorage("SEARCHDATA", searchData);
    return await FlightManager.getFlightsByFilter(searchData);
}

searchBtn.addEventListener("click", async function () {
    event.preventDefault();
    const result = await search();
    console.log(result);
    if(result.length == 0) { 
        alert("no flights found");
        window.location.href = "search.html";
    }
    else {
        window.location.href = "display.html";
    }
});