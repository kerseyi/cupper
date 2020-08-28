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

//for alertdialog

// Will hold previously focused element before modal was opened
let beforeModalOpenedFocus;

// Find the modal and its overlay
let modal = document.querySelector(".modal");
let modalOverlay = document.querySelector(".modal-overlay");

let openModalBtn = document.querySelector("#launchModal");
openModalBtn.addEventListener("click", openModal);

function openModal() {
  // Save current focus
 
  beforeModalOpenedFocus = document.activeElement;

  // Listen for and trap the keyboard
  modal.addEventListener("keydown", trapTabKey);
  // change aria-hidden state
  modal.setAttribute("aria-hidden", "false");

  // Listen for indicators to close the modal
  modalOverlay.addEventListener("click", closeModal);
  // Sign-Up button
  const closeModalBtn = modal.querySelector(".closeModal");
  closeModalBtn.addEventListener("click", closeModal);

  // Find all of the focusable children / elements
  let focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  let focusableElements = modal.querySelectorAll(focusableElementsString);
  // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  const firstTabStop = focusableElements[0];
  const lastTabStop = focusableElements[focusableElements.length - 1];

  // Show the modal and overlay
  modal.style.display = "block";
  modalOverlay.style.display = "block";

  // Focus first child
  firstTabStop.focus();

  function trapTabKey(e) {
    // Check for TAB key press
    if (e.keyCode === 9) {
      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

        // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      closeModal();
    }
  }
}

function closeModal() {
  // Hide the modal and overlay
 modal.style.display = "none";
  modalOverlay.style.display = "none";
  // change aria-hidden state
  modal.setAttribute("aria-hidden", "true");

  // Set focus back to element that had it before the modal was opened
  beforeModalOpenedFocus.focus();
}

```