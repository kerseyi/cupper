+++
title = "Skip Links"
toc = true
tags = ["navigation, skip link"]
+++

Skip links are a common accessibility feature on websites. They are shortcuts to important parts of the webpage that makes it easier and quicker for some users – especially users with disabilities – to find their way around. They care commonly placed before the main navigation menu on the page, but can be used anywhere there is a chunk of content.

Skip links are usually hidden visually by default and appear when users navigate to them using the tab key on their keyboard.


{{< warning >}}
It is a common misconception that skip links are only for people who use screen readers, and therefore do not need to be visible on the page. Skip links <strong>must be visible on focus.</strong>
{{< /warning >}}

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="2.4.1" descriptions="true" >}}


## Skip Link

There are multiple approaches to creating skip links, but the main idea is to hide the link from view until it receives keyboard focus. When the link is pressed, focus is moved to the section that is skipped to.

### Demo

{{<demo caption="Skip link using CSS transform to slide link onto page when focused.">}}
	<script type="text/javascript">

		
		demo.getElementById('skipLink').addEventListener('click', function(e) {
  e.preventDefault();
  var target = demo.getElementById('demoHead');
  target.focus();
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
    //background: #fff;
    color: #000;
    padding: 0.75rem;
    //border: 1px solid black;
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
		body {
  margin: 0;
  height: 500px;
}

* {
 box-sizing: border-box;
}

div {
  height: 50px;
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

*:focus {
    border: 2px solid blue;
}

a {
  color: #333;
  text-decoration: none;
  padding: 0.5rem;
}

#content {
	height: 400px;
	background-color: #009FD4;
}
#demomain {
	
}
p {
	color: white;
	padding-left: 20px;
}

	</style>
    

<a class="hidden" id="skipLink" href="#demomain">Skip to content</a>
<div id="content">
	<nav>
	<ul>
		<li><a href="#">Main</a></li>
		<li><a href="#">Things</a></li>
		<li><a href="#">Stuff</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
	<div id="demomain">
		<h1 id="demoHead">Here's a heading and some content! It's important to focus on me.</h1>
    <p>Content, content, content...lorem ipsum, etc.</p>
		<button id="demoBtn">Push me</button>
	</div>
</div>
{{</demo>}}

### Code

{{< expandable label="HTML" level="1" >}}
{{< snippet file="skipLink_html.md" >}}
{{< /expandable >}}

{{< expandable label="CSS" level="2" >}}
{{< snippet file="skipLink_css.md" >}}
{{< /expandable >}}

{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="skipLink_js.md" >}}
{{< /expandable >}}

