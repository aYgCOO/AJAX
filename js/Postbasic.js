let FetchData = document.getElementById('fetchData');

FetchData.addEventListener('click', FetchJSONdata);

function FetchJSONdata() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onprogress = function () {
        console.log("Execution in progress....");
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("Status Response successful");
            } else {
                console.error(xhr.status + " Bad request");
            }
        }
    };

    xhr.onload = function () {
        setTimeout(() => {
            console.log(this.responseText);
            document.getElementById('fetch').innerHTML = this.responseText;
        }, 3000);
    };

    xhr.send();
}
