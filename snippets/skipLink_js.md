``` Javascript
document.getElementById('skipLink').addEventListener('click', function(e) {
  e.preventDefault();
  var target = document.getElementById('demoBtn');
  target.focus();
});
```