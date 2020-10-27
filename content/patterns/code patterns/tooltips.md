+++
title = "Tooltips"
weight = 1
toc = true
tags = ["tooltips"]
+++

## Accessible Tooltips

### Demo

{{<demo caption="Accessible Tooltip">}}
<style>
 
</style>
<button class="notifications" aria-labelledby="tooltip-label">  
  <svg height='100px' width='100px'  fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M13,17h-2v-2h2V17z"></path><g><path d="M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,4,12,4 M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10   C22,6.5,17.5,2,12,2L12,2z"></path></g><g><path d="M11,14c0-1.4,0.6-1.9,1.1-2.4c0.3-0.2,0.5-0.5,0.6-0.8c0.2-0.3,0.2-0.6,0.2-1c0-0.4-0.1-0.7-0.3-1   c-0.2-0.2-0.4-0.4-0.8-0.4c-0.3,0-1,0.1-1,1.5H9l0-0.4c0-0.9,0.3-1.5,0.8-2C10.4,7.2,11.1,7,11.9,7c1,0,1.7,0.2,2.2,0.8   s0.8,1.2,0.8,2c0,2.4-2,2.5-2,4.2H11z"></path></g></svg>
</button>  
<div role="tooltip" id="tooltip-label">Hi, I'm tooltip text! Hopefully, something useful and brief.</div>
{{</demo>}}

### Code

<!-- {{< expandable label="HTML" level="1" >}}
{{< snippet file="tooltip.md" >}}
{{< /expandable >}}

{{< expandable label="CSS" level="2" >}}
{{< snippet file="tooltip_css.md" >}}
{{< /expandable >}}

{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="tooltip_js.md" >}}
{{< /expandable >}} -->