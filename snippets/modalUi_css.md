``` CSS
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

```