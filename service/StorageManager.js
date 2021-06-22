class StorageManager{
    /**
     * This function used to store date in local storage.
     * @param {String} key 
     * @param {any} value 
     */
    static saveToStorage(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * This function used to retrieve data from local storage.
     * @param {*} key 
     */
    static getFromStorage(key){
        return JSON.parse(localStorage.getItem(key)); 
    }
}