/* Basic request handling process Ajax using Vanilla js */
let FetchDataBtn = document.getElementById('fetchData');

FetchDataBtn.addEventListener('click', FetchingData);

function FetchingData() {

     const xhr = new XMLHttpRequest();

     xhr.open('GET', 'tx/DemoOne.txt', true);

     xhr.onprogress = function () {
          console.log("Execution is on progress....");
     }

     xhr.onload = function () {
          setTimeout(() => {
               console.log(this.responseText);
               document.getElementById('fetch').innerHTML = this.responseText;

          }, 3000)
     }

     xhr.onerror = function () {
          console.error("Execution reject");
     }
     xhr.send();


}
