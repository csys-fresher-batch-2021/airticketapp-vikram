let cardPayButton = document.getElementById('cardPayBtn');

cardPayButton.addEventListener("click", function () {
    saveCardDetails();
});

async function saveCardDetails(){
    let cardName = document.getElementById('name').value;
    let cardNumber = document.getElementById('number').value;
    let expMonth = document.getElementById('expMonth').value;
    let expYear = document.getElementById('expYear').value;
    let cvvNo = document.getElementById('cvvNo').value;

    if (!PaymentValidator.isValidName(cardName)) alert("Invalid name");
    else if (!PaymentValidator.isValidNo(cardNumber)) alert("Invalid card number");
    else if (!PaymentValidator.isValidExpMonth(expMonth)) alert("Invalid expiry month");
    else if (!PaymentValidator.isValidExpYear(expYear)) alert("Invalid expiry year");
    else if (!PaymentValidator.isValidCvv(cvvNo)) alert("Invalid cvv number");
    else {
        let cardDetails = {
            "card_name": cardName,
            "card_no": cardNumber,
            "expiry_month": expMonth,
            "expiry_year": expYear
        };
        // console.log(cardDetails);
        // StorageManager.saveToStorage("CARD", cardDetails);
        let result = await PaymentManager.storeCardDetails(cardDetails);
        if(result != null){
            alert("Payment Successful.");
            window.location.href = "search.html";
        }
    }
}