+++
title = "Tooltips and Toggletips"
weight = 1
toc = true
tags = ["tooltips"]
+++


## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 2.1.1, 4.1.2" >}}

## Tooltip

A tooltip provides extra information about a form field, a link, a button, or other focusable element. It must be triggered by both focus and hover events and remains on the screen as long as the trigger has the focus. The focus does not move to the tooltip.

### Functionality
So, what functionality do we want from a tooltip?
1. Tooltip should appear when an interactive element is hovered over with mouse, AND when it recieves keyboard focus.
2. Screen readers will read the interactive element itself, then the tooltip text.
3. The tooltip shoould be hidden and shown using JavaScript and CSS.
4. Tooltips can be used as a primary label for interactive elemtns, or to provide an alternate desciption.

In this example, we're going to use the tooltip text as an accessible label. The tooltip trigger itself will be a `<button>`. When this button is hovered over with the mouse or tabbed to using the keyboard, the tooltip text will be read aloud to a screen reader. We'll use CSS to hide / show the tooltip on hover and focus, and the `aria-labelledby` attribute to link the tooltip text to the trigger button.



### Demo

{{<demo caption="Accessible Tooltip">}}

<style>
    .demo {
        height: 200px;
    }
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
    left: 11%;
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
            width: 75px;
            height: 75px;
            color: #fefefe;
            border: 0;
            background: #fff;
        }
svg {
    width: 100%;
}
.btn-height {
    height: 200px;
}
</style>
<div class="btn-height">
<button class="notifications" aria-labelledby="tooltip-label">  
  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M13,17h-2v-2h2V17z"></path><g><path d="M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,4,12,4 M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10   C22,6.5,17.5,2,12,2L12,2z"></path></g><g><path d="M11,14c0-1.4,0.6-1.9,1.1-2.4c0.3-0.2,0.5-0.5,0.6-0.8c0.2-0.3,0.2-0.6,0.2-1c0-0.4-0.1-0.7-0.3-1   c-0.2-0.2-0.4-0.4-0.8-0.4c-0.3,0-1,0.1-1,1.5H9l0-0.4c0-0.9,0.3-1.5,0.8-2C10.4,7.2,11.1,7,11.9,7c1,0,1.7,0.2,2.2,0.8   s0.8,1.2,0.8,2c0,2.4-2,2.5-2,4.2H11z"></path></g></svg>
</button>  
<div class="arrow_box" role="tooltip" id="tooltip-label">View help and manage settings</div>
</div>
{{</demo>}}

### Code Pattern
    
{{< expandable label="HTML" level="1" >}}
{{< snippet file="tooltips/tooltips_html.md" >}}
{{< /expandable >}}
{{< expandable label="CSS" level="2" >}}
{{< snippet file="tooltips/tooltips_css.md" >}}
{{< /expandable >}}

## Tooltip Dialog

### Demo

{{<demo caption="Accessible tooltip dialog">}}
<style>
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
</style>
<span class="toggletip-container">
  <button type="button" aria-label="more info" data-toggletip-content="Here's that toggletip text!">i</button>
  <span role="status"></span>
</span>
<script>
    (function() {
  // Get all the toggletip buttons
  var toggletips = demo.querySelectorAll('[data-toggletip-content]');

  // Iterate over them
  Array.prototype.forEach.call(toggletips, function (toggletip) {
    // Get the message from the data-content element
    var message = toggletip.getAttribute('data-toggletip-content');

    // Get the live region element
    var liveRegion = toggletip.nextElementSibling;

    // Toggle the message
    toggletip.addEventListener('click', function () {
        liveRegion.innerHTML = '';
        window.setTimeout(function() {
          liveRegion.innerHTML = '<span class="toggletip-bubble">'+ message +'</span>';
        }, 100);
    });

    // Close on outside click
    demo.addEventListener('click', function (e) {
      if (toggletip !== e.target) {
        liveRegion.innerHTML = '';
      }                        
    });

    // Remove toggletip on ESC
    toggletip.addEventListener('keydown', function (e) {
      if ((e.keyCode || e.which) === 27)
      liveRegion.innerHTML = '';
    });
    
    // Remove on blur
    toggletip.addEventListener('blur', function (e) {
      liveRegion.innerHTML = '';
    });
  });
}());
</script>

{{</demo>}}

### Code Pattern
    
{{< expandable label="HTML" level="1" >}}
{{< snippet file="toggletips_html.md" >}}
{{< /expandable >}}
{{< expandable label="CSS" level="2" >}}
{{< snippet file="toggletips_css.md" >}}
{{< /expandable >}}
{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="toggletips_js.md" >}}
{{< /expandable >}}

{{< tested using="Firefox + NVDA, Chrome, Safari iOS + Voiceover, Edge" >}}

## References
- Adapted from: [Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- CSS Arrow generator: [CSS Arrow Please!](https://cssarrowplease.com/)



