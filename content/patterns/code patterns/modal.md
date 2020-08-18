+++
title = "Pop ups and Modals"
weight = 2
toc = true
tags = ["modal, popup"]
+++

# Popups and Modals

Modals are intended to be used as a quick and simple way to capture an interaction from a user. They trap the user’s focus (visual and navigational) in a window that is separated from the rest of the page content, blocking access to the contents on the main page until the modal is closed by the user. These modal windows are overlaid over the main page content, trapping keyboard focus in their windows, and blurring out or dimming the main page content.

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 2.1.1" descriptions="true" >}}

## User Input Modal

### Demo

{{< codePen poJOmwQ >}}

{{<demo caption="User Input Modal">}}
	<script>
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
	<style>
		
		body {
  background: rgb(59, 45, 63);
  background: radial-gradient(
    circle,
    rgba(59, 45, 63, 0.5186449579831933) 0%,
    rgba(76, 64, 77, 1) 100%
  );
}

#launchModal {
  margin-top: 150px;
}

.modal-overlay {
  width: 100%;
  height: 100%;
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

.main-content {
  height: 60vh;
}
	</style>
	<!--NOTE: Example using Bootstrap 4.4.1 -->
<!-- Button trigger modal -->
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<div class="container-fluid">
  <div class="row main-content">
    <div class="col-md-6 offset-md-3">
      <button id="launchModal" type="button" class="btn btn-light btn-lg btn-block">
        Launch Modal
      </button>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Accessible Modal Example</h5>
        <button type="button" class="close closeModal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p tabindex="0">Set a tabindex on this P element to make sure first element in modal gets focus. Normally non-focusable elements that are the first element in a modal need to recieve focus.</p>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" title="Please enter your email." required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" title="Please enter your city." required>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>OR</option>
                <option>CA</option>
                <option>NY</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" title="Please enter your zip code." required>
            </div>
          </div>
          <div>
          </div>
          <p>Make sure that error messages have been added to all inputs.</p>
      </div>
      <div class="modal-footer">
        <input role="button" type="submit" class="btn btn-primary closeModal" value="Submit">
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal-overlay"></div>

{{</demo>}}

### Code


{{< expandable label="HTML" level="1" >}}
{{< snippet file="modalUi_html.md" >}}
{{< /expandable >}}
{{< expandable label="CSS" level="2" >}}
{{< snippet file="modalUi_css.md" >}}
{{< /expandable >}}
{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="modalUi_js.md" >}}
{{< /expandable >}}



