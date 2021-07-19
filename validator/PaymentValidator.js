class PaymentValidator{
    /**
     * Function to validate card owner name.
     * @param {*} name 
     */
    static isValidName(name){
        if(isNaN(name)) return true;
        return false;
    }

    /**
     * Function to validate card number.
     * @param {*} no 
     */
    static isValidNo(no){
        if(!isNaN(no)){
            if(no.toString().length >= 12){
                return true;
            }
        }
        return false;
    }

    /**
     * Function to validate card expiry month.
     * @param {*} expMonth 
     */
    static isValidExpMonth(expMonth){
        if(!isNaN(expMonth)){
            if(expMonth.toString().length <= 2 && expMonth <= 12){
                return true;
            }
        }
        return false;
    }

    /**
     * Function to validate card expiry year.
     * @param {*} expYear 
     */
    static isValidExpYear(expYear){
        if(!isNaN(expYear)){
            if(expYear.toString().length === 2 && expYear > 21){
                return true;
            }
        }
        return false;
    }

    /**
     * Function to validate cvv number.
     * @param {*} no 
     */
    static isValidCvv(no){
        if(!isNaN(no)){
            if(no.toString().length === 3){
                return true;
            }
        }
        return false;
    }

}