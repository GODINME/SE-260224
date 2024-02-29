(function(){

    /**
     * This function loads data asynchronously from the URL. The callback function get called
     * once the data is ready
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method: string, url: string, callback: Function): void {
        // step 1. Create an empty XHR object
        let XHR = new XMLHttpRequest();

        // step 2. Compose the reques
        XHR.open(method, url);

        // step 3. Send the request to the server
        XHR.send();

        // step 4. Setup an event listener
        XHR.addEventListener("readystatechange", function(){
            if (XHR.status == 200 && XHR.readyState == 4){
                callback(XHR.responseText);
            }
        });
    }

    /**
     * This function write or save all contacts to the local storage 
     *
     * @param {any[]} contactList
     */
    function SaveContactListDataToLocalStorage(contactList: any[]): void {
        // loading data to local storage
        let counter = 0
        for (const contact of contactList) {
            let newContact = new Contact(contact.fullName, contact.contactNumber, contact.emailAddress);
           localStorage.setItem(counter.toString(), newContact.toJSON());
           counter++;
        }
    }

    /**
     * This function retrieve or read all contact from the local storage and return it as an array of contacts
     *
     * @return {*}  {Contact[]}
     */
    function LoadDataFromLocalStorage(): Contact[]{
        // Retrieving data from local storage
        let contactArray = new Array<Contact>();
        let keys = Object.keys(localStorage);
        for (const key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
           contactArray.push(newContact);
        }

        return contactArray;
    }

    /**
     * This function print or display all the contact from the local storage to the console
     *
     * @param {Contact[]} contactArray
     */
    function PrintContactArray(contactArray: Contact[]): void {
        for (const contact of contactArray) {
            console.log(contact.toString())
        }
    }

    function Start(): void {
        console.log("App Started...");

        $.getJSON("./Data/contact.json", function(dataSource){
            let contactList: any[] = dataSource.contactList;

            SaveContactListDataToLocalStorage(contactList);

            let contactArray = LoadDataFromLocalStorage();

            PrintContactArray(contactArray);

            
        });
    }

    window.addEventListener("load", Start);
    
})();