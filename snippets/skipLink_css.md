``` CSS
*:focus {
    border: 2px solid blue;
}

* {
 box-sizing: border-box;
}

body {
  margin: 0;
  height: 500px;
}

a {
  color: #333;
  text-decoration: none;
  padding: 0.5rem;
}

button {
  font-size: 1.25rem;
  border-radius: 0.33em;
  font-family: inherit;
  background: #111;
  color: #fefefe;
  padding: 0.75rem;
  border: 0;
  text-align: center;
  margin-top: 20vh;
  margin-left: 25%;
  width: 50%;
}

ul {
	list-style: none;
	margin-top: 0px;
	padding-left: 0px;
	background-color: lightgreen;
}

ul > li {
  font-size: 1.25rem;
  font-family: inherit;
  color: #000;
  padding: 0.75rem;
  display: inline-block;
  width: 24%;
  text-align: center;
  margin: 0px;
}

ul > li a {
	width: 100%;
}

ul > li:hover {
	background-color: aliceblue;
}

ul > li a:focus {
	background-color: aliceblue;
}

.hidden {
  padding: 0.75rem;
  padding-bottom: 1.25rem;
  position: absolute;
  background: #000;
  color: #fff;
  left: 50%;
  height: 50px;
  transform: translateY(-100%);
  transition: transform 0.3s;
  opacity: 0;
}

.hidden:focus {
	transform: translateY(0%);
  opacity: 1;
  border: 2px solid aliceblue;
}

#content {
	height: 400px;
	background-color: #009FD4;
}

p {
	color: white;
	padding-left: 20px;
}
```