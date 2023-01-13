$(document).ready(function(){  

  $('.dropbtn, .secondBar, .dopbtn::before').hover(function() {
    if( $("body").innerWidth() > 930){
      $('.secondBar').addClass('visible');
    }
  },

  // mouse out
  function() {
      $('.secondBar').removeClass('visible');
  });

  var sidenav = document.getElementById("mySidenav");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  /* Set the width of the side navigation to 250px */
  function openNav() {
    sidenav.classList.add("active");
    $('.cross-icon').show();
    $('.burger-icon').hide();
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sidenav.classList.remove("active");
    $('.cross-icon').hide();
    $('.burger-icon').show();
  }

})