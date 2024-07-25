/* Check the readystate of a Ajax GET request using Vanilla js */
let FetchData = document.getElementById('fetchData');

FetchData.addEventListener('click', FetchingDataWithCheckingReadyState);

function FetchingDataWithCheckingReadyState() {
     let xhr = new XMLHttpRequest();

     xhr.open('GET', '../tx/DemoTwo.txt', true);

     xhr.onprogress = function () {
          console.log("Execution on progress....");

     }

     xhr.onreadystatechange = function () {
          switch (xhr.readyState) {
               case 0:
                    console.log('UNSENT: Request not initialized');
                    break;
               case 1:
                    console.log('OPENED: Server connection established');
                    break;
               case 2:
                    console.log('HEADERS_RECEIVED: Request received');
                    break;
               case 3:
                    console.log('LOADING: Processing request');
                    break;
               case 4:
                    if (xhr.status >= 200 && xhr.status <= 300) {
                         console.log("DONE: Request finished and response is ready");
                         break;
                    } else {
                         console.error("Console error (Request rejected)");
                         break;
                    }
               default:
                    console.log("400: Bad request");


          }
     }
     xhr.onload = function () {
          setTimeout(() => {
               console.log(this.responseText);
               document.getElementById('fetch').innerHTML = this.responseText;

          }, 3000)
     }
     xhr.send();
}