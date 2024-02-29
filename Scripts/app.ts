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

    let contactList;

    function Start(): void {
        console.log("App Started...");

        $.getJSON("./Data/contact.json", function(dataSource){
            contactList = dataSource.contactList;

            // loading data to local storage
            let counter = 0
            for (const contact of contactList) {
                let newContact = new Contact(contact.fullName, contact.contactNumber, contact.emailAddress);
               localStorage.setItem(counter.toString(), newContact.toJSON());
               counter++;
            }

            // Retrieving data from local storage
            let keys = Object.keys(localStorage);
            for (const key of keys) {
                let newContact = new Contact();
                newContact.fromJSON(localStorage.getItem(key));
                console.log(newContact.toString());
            }
        });
    }

    window.addEventListener("load", Start);
    
})();