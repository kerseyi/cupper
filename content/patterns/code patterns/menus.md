+++
title = "Menus"
weight = 3
toc = true
tags = [" menu, toggle, expand"]
+++

## Menu Buttons

Here is an example of the menu button being activated on the click event.

## Demo
{{<demo caption="Menu Button">}}
	<script type="text/javascript">
		const menuButton = demo.getElementById('menu-btn-example1');

	menuButton.addEventListener('click', function(){
	let expanded = this.getAttribute('aria-expanded') === 'true';
	this.setAttribute('aria-expanded', !expanded);
	let exampleMenu = this.nextElementSibling;
	exampleMenu.hidden = !exampleMenu.hidden;
});
	</script>
	<style>
		button {
    		font-size: 1.25rem;
    		border-radius: 0.33em;
    		font-family: inherit;
    		background: #111;
    		color: #fefefe;
    		padding: 0.75rem;
    		border: 0;
		}
		ul {
			list-style: none;
			width: 150px;
			margin-top: 0px;
			padding-left: 0px;
			border-bottom-left-radius: 0.33em;
    		border-bottom-right-radius: 0.33em;
    		border-top-right-radius: 0.33em;
    		border: 1px solid black;
		}
		ul > li {
    		font-size: 1.25rem;
    		font-family: inherit;
    		background: #fff;
    		color: #000;
    		padding: 0.75rem;
    		border: 1px solid black;

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
	</style>
<nav>
	<button id="menu-btn-example1" aria-expanded="false" aria-haspopup="true">Press me!</button>
		<ul role="menu" class="menu-btn-example-ul" hidden>
		<li>
			<a href="#" role="menuitem">Option 1</a>
		</li>
		<li>
			<a href="#" role="menuitem">Option 2</a>
		</li>
		<li>
			<a href="#" role="menuitem">Option 3</a>
		</li>
	</ul>
</nav>
{{</demo>}}

## Code Pattern

### HTML


<nav>
	<button id="menu-btn-example"  aria-expanded="false" aria-haspopup="true">Press me!</button>
	<ul class="menu-btn-example-ul" role="menu" hidden>
		<li>
			<a href="#" role="menuitem">Option 1</a>
		</li>
		<li>
			<a href="#" role="menuitem">Option 2</a>
		</li>
		<li>
			<a href="#" role="menuitem">Option 3</a>
		</li>
	</ul>
</nav>
	


### JavaScript
{{< expandable label="HTML" level="1" >}}
{{< snippet file="menuBtn_html.md" >}}
{{< /expandable >}}

const menuButton = document.getElementById('menu-btn-example');

menuButton.addEventListener('click', function(){
	let expanded = this.getAttribute('aria-expanded') === 'true';
	this.setAttribute('aria-expanded', !expanded);
	let exampleMenu = this.nextElementSibling;
	exampleMenu.hidden = !exampleMenu.hidden;
})