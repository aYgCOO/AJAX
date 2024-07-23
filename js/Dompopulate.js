/*Dom Populate With Ajax */
let populateBtn = document.getElementById('dom-populate');

populateBtn.addEventListener('click', populate);

function populate() {
     console.log("You press the populate button..");
     let xmlHRs = new XMLHttpRequest();

     xmlHRs.open('GET', 'https://dummy.restapiexample.com/api/v1/employee/1', true);

     xmlHRs.onprogress = function () {
          console.log("Execution on progress...");
     }
     xmlHRs.onload = function () {
          if (xmlHRs.status >= 200 && xmlHRs.status <= 300) {
               console.log("DONE: Request finished and response is ready");
               try {
                    setTimeout(() => {
                         let obj = JSON.parse(this.responseText);
                         console.log(obj);
                         var str = "";
                         if(obj.data){
                         Object.keys(obj.data).forEach((key) => {
                              str += `<li>${obj.data[key]}</li>`;
                         })
                    }else{
                         str += `<li>Data not found</li>`;
                    }
                         console.log(str);
                         document.getElementById('list').innerHTML = str;
                    }, 3000)

               }
               catch (e) {
                    console.log("You JSON parse in not responding", e);

               }
          } else {
               console.log("ERROR: Request Reject");

          }

     }
     xmlHRs.onerror = function () {
          console.log("Execution error.");
     }

     xmlHRs.send();
}
