```HTML
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
```