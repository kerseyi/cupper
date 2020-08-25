
Here is how the **accessible name** of an element is calculated:

1. **aria-labelledby** : This attribute will override all of the others if present.
2. **aria-label** : This attribute will override all of the others if no **aria-labelledby** is present. This attribute is **only accessible to screen readers** -- it will not be displayed visually on the page.
3. Native HTML text :  If **aria-labelledby** and **aria-label** are missing, the native text of the HTML element will be used. Native text is the text between the opening and closing tags of the element. Ex:
```HTML
<button>This is a button</button>
```



