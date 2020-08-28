+++
title = "Alerts"
toc = true
+++

Alerts are an important type of ARIA live region which provide screen readers with ways to announce meaningful information to a user. These alerts are triggered programmatically, usually based on a user interaction or timer. They announce text to the use without moving keyboard focus. Since they are intended to stand out from other content on the page, they should be styled and positioned on the page close to the user's mouse or element that has keyboard focus.

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 4.1.2, 4.1.3" descriptions="true" >}}

## Features

-  **Activation**: Alerts are activated by a user interaction, timer, or other method.
-  **Keyboard Focus**: Focus must not be moved when an alert is activated. 
-  **Design**: Distinct from other visual content on page.
-  **Position**: Should be positioned close to the user's mouse, or element / region of page that currently has focus. This is to ensure that users using screen magnifiers will be aware of the alert.
-  **Message text and length**: Messages should be concise and brief. If an icon is used to convey semantics (warning, success, etc.), make sure that the meaning of the icon is communicated in the alert text.

{{< warning >}}
Best practice is to only have one alert message on the screen at a time. Make sure to clear a previous alert when a new one is introduced.
{{< /warning >}}


## Implementation Notes

1. An empty ARIA live region **MUST** be present in the DOM on page load.
2. The ARIA live region **MUST** be empty on page load.
3. Another ARIA live region can be added to the DOM later, but it **MUST** be empty.
4. If an ARIA live region is added to the DOM without a page load / refresh event, a JavaScript delay should be used before putting content into the live region.

{{< warning >}}
<H3>Role Alert or Alert Dialog?</H3>
<ul>
	<li>
		<h4><code>role="alert"</code></h4> This role does not move keyboard focus, require a user action, or hide any part of the page.
	</li>
	<li>
		<h4><code>role="alertdialog"</code></h4> This role is like a hybrid of and alert and a typical modal (see {{< pattern "Pop ups and Modals" >}}). This role requires a user action, and moves keyboard focus to the dialog when it is activated. Like a typical dialog / modal, the alert cannot be dismissed until a user closes the modal. 
	</li>
</ul>

{{< /warning >}}



## Demo - role alert and alertdialog

{{< rawhtml >}}

<style>
.demo-hidden {
  display: none;
  visibility: hidden;
}
#alertBox {
	padding: 20px;
}
.yes {
  color: green;
  border: 2px solid green;
  border-radius: 10px;
}
.no {
  color: red;
  border: 2px solid red;
  border-radius: 10px;
}

.modal {
	position: fixed;
	top: 30%;
  	left: 50%;
  	z-index: 5;
  	display: none;
  	border: 5px solid black;
  	border-radius: 20px;
  	padding: 10px;
  	text-align: center;
}

.modal-overlay {
  width: 100vw;
  height: 100vh;
  z-index: 2; /* places the modalOverlay between the main page and the modal dialog */
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  margin: 0;
  padding: 0;
}
</style>
<div class="alertGroup" >
  <div id="alertBox" class="demo-hidden" role="alert" aria-live="polite"></div>
    <button id="yass">Success!</button>
    <button id="error">Error</button>
    <button id="clear">Clear alert</button>
    <button id="launchModal">
        Alert Dialog
    </button>
</div>


<!-- Modal -->

<div class="modal" aria-modal="true" id="exampleModal" tabindex="-1" role="alertdialog" aria-labelledby="launchModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
        <p tabindex="0">Alert! There's something very wrong here.</p>
         <button type="button" class="close closeModal" aria-label="Close">
          Close
        </button>
  </div>
</div>
<div class="modal-overlay"></div>

<script>
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

</script>
{{< /rawhtml >}}

## Code

{{< expandable label="HTML" level="1" >}}
{{< snippet file="alerts/alert_html.md" >}}
{{< /expandable >}}

{{< expandable label="CSS" level="2" >}}
{{< snippet file="alerts/alert_css.md" >}}
{{< /expandable >}}

{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="alerts/alert_js.md" >}}
{{< /expandable >}}




## Browser and Screen Reader support

{{< tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, IE + JAWS, Edge + Narrator" >}}