class StorageManager {
    /**
     * This function used to store data in local storage.
     * @param {String} key 
     * @param {any} value 
     */
    static saveToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * This function retrieves the data from the local storage.
     * @param {string} key 
     */
    static getFromStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}