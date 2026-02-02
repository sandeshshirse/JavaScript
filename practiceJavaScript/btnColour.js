<button id="colorButton">Click Me!</button>

<script>
 
  const btn = document.getElementById('colorButton');

 
  btn.addEventListener('click', function() {
   
    btn.style.backgroundColor = 'tomato';
    btn.style.color = 'white'; // Optional: makes text easier to read
  });
</script>
