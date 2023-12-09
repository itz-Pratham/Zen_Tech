// Optional: You can add JavaScript functionality if needed
// For example, you might want to close the drawer when clicking outside of it
document.addEventListener('click', function (event) {
    var isClickInside = document.querySelector('.links').contains(event.target);
    var menu = document.querySelector('.menu');
    
    if (!isClickInside && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  });
  