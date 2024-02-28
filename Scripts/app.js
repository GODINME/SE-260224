(function(){

    function XHRRequest(method, url) {
        // step 1. Create an empty XHR object
        let XHR = new XMLHttpRequest();

        // step 2. Compose the reques
        XHR.open(method, url);

        // step 3. Send the request to the server
        XHR.send();

        // step 4. Setup an event listener
        XHR.addEventListener("readystatechange", function(){
            if (XHR.status == 200 && XHR.readyState == 4){
                console.log(XHR.responseText);
            }
        });
    }

    function Start() {
        console.log("App Started...");

        XHRRequest("GET", "./Data/contact.json");
    }

    window.addEventListener("load", Start);
    
})();