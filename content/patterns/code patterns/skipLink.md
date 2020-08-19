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

There are multiple approaches to creating skip links, but the main idea is to hide the link from view until it receives keyboard focus.

### Demo

{{<demo caption="Skip link using CSS transform to slide link onto page when focused.">}}
	<style>
		@import '../../../css/bootstrap.min.css';
		body {
  margin: 0;
}

* {
 box-sizing: border-box;
}

div {
  height: 50px;
  background: #E84C3D;
}

.hidden {
  padding: 8px;
  position: absolute;
  background: #E77E23;
  left: 50%;
  height: 30px;
  transform: translateY(-100%);
  transition: transform 0.3s;
  opacity: 0;
}

a:focus {
  transform: translateY(0%);
  opacity: 1;
  border: 2px solid blue;
}

a {
  color: #333;
  text-decoration: none;
}

	</style>
    <a class="hidden" href="#demomain">Skip to content</a>
<div>
<div id="content">
	<p tabindex="0" style="background-color: aliceblue;">Oh boy, I would love to be able to skip all of this stuff.</p>
	<div id="demomain">
		<p tabindex="0">Right where I want to be.</p>
	</div>
</div>
{{</demo>}}

