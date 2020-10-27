``` CSS
.toggletip-container {
  position: relative;
  display: inline-block;
}

/* the bubble element, added inside the toggletip live region */

.toggletip-bubble {
  display: inline-block;
  position: absolute;
  left: 100%;
  top: 0;
  width: 10em;
  padding: 0.5rem;
  background: #000;
  color: #fff;
}

button {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 0;
  background: #000;
  font-family: serif;
  font-weight: bold;
  color: #fff;
} 

button:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem skyBlue;
}

/* boilerplate; nothing really to see here */

html {
  font-size: 150%;
  font-family: sans-serif;
}

* {
  font-size: inherit;
}

```