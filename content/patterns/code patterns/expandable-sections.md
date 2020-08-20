+++
title = "Expandable Sections"
weight = 1
toc = true
tags = ["accordion, menu, toggle, expand"]
+++

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.4.12, 4.1.2, 2.1.1, 4.1.1" descriptions="true" >}}

## HTML Details Element

[HTML Details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

### Demo

{{<demo caption="Basic HTML Details Element">}}
<style>
  details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: 1.5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
</style>
<details>
  <summary>OOOH, WHAT'S IN THERE?</summary>
  <p>IT'S A PUPPY!</p>
  <img style="width: 100%;" src="https://cdn.vox-cdn.com/thumbor/zL48ecvX2NkW1cU0FEfgrCc7Rgo=/0x0:900x500/920x613/filters:focal(378x178:522x322):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg" alt="dog sits in burning house drinking coffee saying, this is fine"/>
  
</details>
{{</demo>}}

### Code

{{< expandable label="HTML" level="1" >}}
{{< snippet file="details.md" >}}
{{< /expandable >}}

{{< expandable label="CSS" level="2" >}}
{{< snippet file="details_css.md" >}}
{{< /expandable >}}

{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="details_js.md" >}}
{{< /expandable >}}



{{< tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" >}}

## "Read More" Expandable Section


### Demo

{{< codePen yLeOrqe >}}






