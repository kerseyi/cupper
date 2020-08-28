```JAVASCRIPT
const alert = document.getElementById("alertBox");
const goodJob = document.getElementById("yass");
const badJob = document.getElementById("error");
const clear = document.getElementById("clear");

badJob.addEventListener("click", () => {
 activateAlert("Whoa, there's something wrong here...", "no" );
});

goodJob.addEventListener("click", () => {
 activateAlert("Success! Such a good job!", "yes" );
});

clear.addEventListener("click", () => {
 alert.classList.add("demo-hidden");
});

function activateAlert(alertMsg, alertClass){
  alert.className = alertClass;
  alert.innerHTML = "";
  alert.classList.remove("demo-hidden");
  alert.innerHTML = alertMsg;
}
```