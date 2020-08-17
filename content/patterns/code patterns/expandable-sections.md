+++
title = "Expandable sections"
weight = 1
toc = true
+++

# Accordion Menus
Accordion menus are everywhere we look on the web. With such ubiquity, you'd expect that there would be a pretty well defined standard for constructing these components. Well, there's not. So when it comes to making accordion menus accessible, things can get tricky. While the functionality and HTML markup for accordions is pretty straightforward, some implementations are overly complex. Let's take a look at the intended functionality of an accordion menu before we look under the hood.

## Use Case: Why an accordion?

Accordion menus and collapsible regions are great ways to conserve screen space on your website. It is a design element that expands in place to reveal hidden information. They allow the user to get a quick overview of the content on the page. This is especially helpful on mobile devices, where screen size is limited. Accordion menus can become unwieldy very fast, as they can push other content out of view as they expand.

### Accordions are great for:
 - Navigation Menus
 - Forms with multiple sections
 - Polka


## Code patterns

There are a number of ways to construct an accordion menu. Below, we provide some common accordion menu patterns with accessibility friendly features.

## HTML Details Element


{{< snippet file="visually-hidden.md" >}}
