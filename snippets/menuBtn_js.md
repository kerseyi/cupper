``` Javascript
const menuButton = document.getElementById('menu-btn-example');

menuButton.addEventListener('click', function(){
	let expanded = this.getAttribute('aria-expanded') === 'true';
	this.setAttribute('aria-expanded', !expanded);
	let exampleMenu = this.nextElementSibling;
	exampleMenu.hidden = !exampleMenu.hidden;
})
```