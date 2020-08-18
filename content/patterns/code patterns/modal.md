+++
title = "Pop ups and Modals"
weight = 2
toc = true
tags = ["modal, popup"]
+++

# Popups and Modals

Modals are intended to be used as a quick and simple way to capture an interaction from a user. They trap the user’s focus (visual and navigational) in a window that is separated from the rest of the page content, blocking access to the contents on the main page until the modal is closed by the user. These modal windows are overlaid over the main page content, trapping keyboard focus in their windows, and blurring out or dimming the main page content.

## Applicable WCAG 2.1 Success Criteria

{{< wcag include="1.3.1, 2.1.1" descriptions="true" >}}

## User Input Modal

### Demo

{{< codePen poJOmwQ >}}

### Code


{{< expandable label="HTML" level="1" >}}
{{< snippet file="modalUi_html.md" >}}
{{< /expandable >}}
{{< expandable label="CSS" level="2" >}}
{{< snippet file="modalUi_css.md" >}}
{{< /expandable >}}
{{< expandable label="JavaScript" level="3" >}}
{{< snippet file="modalUi_js.md" >}}
{{< /expandable >}}



