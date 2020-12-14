``` Javascript
document.getElementById('skipLink').addEventListener('click', function(e) {
  e.preventDefault();
  var target = demo.getElementById('demoHead');
  target.focus();
});
```