$(document).ready(function(){  

  //~~~~~~~~~~~~~~~~Header second bar
  $('.dropbtn, .secondBar, .dropbtn::before').hover(function() {
    if( $("body").innerWidth() > 930){
      $('.secondBar').addClass('secondBar-visible');
      $('.underDropbtn').addClass('underDropbtn-visible');
    }
  },

  function() {  // mouse out
      $('.secondBar').removeClass('secondBar-visible');
      $('.underDropbtn').removeClass('underDropbtn-visible');

  });

  //~~~~~~~~~~~~~~Hamburger menu
  var sidenav = document.getElementById("mySidenav");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add("active");
    $('.cross-icon').show();
    $('.burger-icon').hide();
  }

  function closeNav() {
    sidenav.classList.remove("active");
    $('.cross-icon').hide();
    $('.burger-icon').show();
  }

  //~~~~~~~~~~~~~~~~~Hamburger dropdown
  var secondBarMobile = document.getElementById("mySecondBarMobile");
  var openBtnMobile = document.getElementById("openBtnMobile");
  var closeBtnMobile = document.getElementById("closeBtnMobile");
  var dropdownBtnMobile = document.getElementById("dropdown");
  let open = false;
  
  openBtnMobile.onclick = openDropdown;
  closeBtnMobile.onclick = closeDropdown;
  dropdownBtnMobile.onclick = clickDropdown;

  function openDropdown() {
    secondBarMobile.classList.add("activeBurger");
    $('.arrow-up').show();
    $('.arrow-down').hide();
    let height = sidenav.style.height;
    sidenav.style.height = `${height}px`;
  }

  function closeDropdown() {
    secondBarMobile.classList.remove("activeBurger");
    $('.arrow-up').hide();
    $('.arrow-down').show();
    let height = sidenav.style.height;
    sidenav.style.height = `${height}px`;
  }

  function clickDropdown() {
    if(open == false){
      openDropdown();
      open = true;
    }else{
      closeDropdown();
      open = false;
    }
  }

})