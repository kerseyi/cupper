```CSS
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
}

.modal-dialog {
	border: 2px solid black;
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
}```