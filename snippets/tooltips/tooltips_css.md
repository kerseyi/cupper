```CSS
[role="tooltip"] {
  display: none;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  width: 40%;
}
.arrow_box {
    position: relative;
    background: #fff;
    border: 2px solid #000;
    margin-top: 15px;
}
.arrow_box:after, .arrow_box:before {
    bottom: 100%;
    left: 15%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.arrow_box:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 20px;
    margin-left: -20px;
}
.arrow_box:before {
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: #000;
    border-width: 23px;
    margin-left: -23px;
}

button:hover + [role="tooltip"],  
button:focus + [role="tooltip"] {  
  display: block;
}
button {
    font-size: 1.25rem;
    border-radius: 0.33em;
    font-family: inherit;
    width: 120px;
    height: 120px;
    color: #fefefe;
    padding: 0.75rem;
    border: 0;
    background: #fff;
}
svg {
    width: 100%;
}
```