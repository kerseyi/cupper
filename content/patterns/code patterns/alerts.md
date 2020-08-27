+++
title = "Alerts"
toc = true
+++

Alerts are an important type of ARIA live region which provide screen readers with ways to announce meaningful information to a user. These alerts are triggered programmatically, usually based on a user interaction or timer. They announce text to the use without moving keyboard focus. Since they are intended to stand out from other content on the page, they should be styled and positioned on the page close to the user's mouse or element that has keyboard focus.

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 4.1.2, 4.1.3" descriptions="true" >}}

## Features

-  **Activation**: Alerts are activated by a user interaction, timer, or other method.
-  **Keyboard Focus**: Focus must not be moved when an alert is activated. 
-  **Design**: Distinct from other visual content on page.
-  **Position**: Should be positioned close to the user's mouse, or element / region of page that currently has focus. This is to ensure that users using screen magnifiers will be aware of the alert.
-  **Message text and length**: Messages should be concise and brief. If an icon is used to convey semantics (warning, success, etc.), make sure that the meaning of the icon is communicated in the alert text.

{{< warning >}}
Best practice is to only have one alert message on the screen at a time. Make sure to clear a previous alert when a new one is introduced.
{{< /warning >}}


## Implementation Notes

1. An empty ARIA live region **MUST** be present in the DOM on page load.
2. The ARIA live region **MUST** be empty on page load.
3. Another ARIA live region can be added to the DOM later, but it **MUST** be empty.
4. If an ARIA live region is added to the DOM without a page load / refresh event, a JavaScript delay should be used before putting content into the live region.

## Demo and Code

{{< demo >}}
<div class="alertGroup" >
  <div id="alertBox" class="hidden" role="alert" aria-live="polite"></div>
  <p>
    <button id="yass" data-msg="Great job! Such success!" data-class="yes">Success!</button>
    <button id="error">Error</button>
    <button id="clear" class="clear">Clear alert</button>
  </p>
</div>

<style>
  .hidden {
    display: none;
    visibility: hidden;
  }

  .yes {
    color: green;
  }

  .no {
    color: red;
  }
</style>

<script>
  const group = document.getElementById("alertGroup");
  const alert = document.getElementById("alertBox");
  const goodJob = document.getElementById("yass");
  const badJob = document.getElementById("error");

  goodJob.onclick = activateAlert;
  badJob.onclick = activateAlert;

  function activateAlert(){
    alert.innerHTML = "";
    alert.classList.add(button.dataset.class);
    alert.classList.remove("hidden");
    alert.innerHTML = button.dataset.msg;
  }


</script>
{{< /demo >}}







## Browser and Screen Reader support

{{< tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, IE + JAWS, Edge + Narrator" >}}