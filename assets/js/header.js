document.write(`
<header>
      

    <div class="firstBar">
        <a href="../index.html" class="logo">CoMBIMaC</a>
        <navbar>
            <div class="dropbtn">Littérature & combinatoire
                <img class="underDropbtn" src="../assets/svg/arrowUp.svg"/>
            </div>

            <a class="navlink" href="./expo.html">Exposition</a>
            <a class="navlink" href="./creations.html">Créations</a>
        </navbar>
        <div id="mySidenav" class="sidenav">
            <a id="dropdown" href="#">Littérature & combinatoire</a>
            <div id="mySecondBarMobile" class="secondBarMobile">
                <a class="navlink-mobile" href="./haikus_explanations.html">Haïkus</a>
                <a class="navlink-mobile" href="./narrations_explanations copy.html">Narrations</a>
                <a class="navlink-mobile" href="./bristols_explanations.html">Bristols</a>
                <a class="navlink-mobile" href="./tales_explanations.html">Contes à votre façon</a>
                <a class="navlink-mobile" href="./sonnets_explanations.html">Sonnets</a>
            </div>
            <a href="#" id="openBtnMobile">
                <img class="arrow-down" alt="Open dropdown mobile menu" src="../assets/svg/arrowDown.svg"/>
            </a>
            <a href="#" id="closeBtnMobile">
                <img class="arrow-up" alt="Close dropdown mobile menu" src="../assets/svg/arrowUp.svg"/>
            </a>
            <a class="navlink-mobile" href="./expo.html">Exposition</a>
            <a class="navlink-mobile" href="./creations.html">Créations</a>
          </div> 
          <a href="#" id="openBtn">
            <img class="burger-icon icon" alt="Open mobile menu" src="../assets/svg/hamburger.svg"/>
          </a>
          <a href="#" id="closeBtn">
            <img class="cross-icon icon" alt="Close mobile menu" src="../assets/svg/cross.svg"/>
          </a>
    </div>
    <div class="secondBar">
        <a class="navlink" href="./haikus_explanations.html">Haïkus</a>
        <a class="navlink" href="./narrations_explanations copy.html">Narrations</a>
        <a class="navlink" href="./bristols_explanations.html">Bristols</a>
        <a class="navlink" href="./tales_explanations.html">Contes à votre façon</a>
        <a class="navlink" href="./sonnets_explanations.html">Sonnets</a>
    </div>
</header>
`);



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