(function(){

    /**
     * This function loads data asynchronously from the URL. The callback function get called
     * once the data is ready
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method, url, callback) {
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

    function Start() {
        console.log("App Started...");

        LoadData("GET", "./Data/contact.json", function(XHR){
            console.log(XHR);
        });
    }

    window.addEventListener("load", Start);
    
})();