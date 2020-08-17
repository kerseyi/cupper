The DETAILS element supports the TOGGLE event, so adding more functionality to it is pretty straightforward.

```JS
details.addEventListener("toggle", event => {
  if (details.open) {
    /* the element was toggled open */
    //do awesome thing!
    } else {
      /* the element was toggled closed */
      // undo awesome thing
    }
  });
```