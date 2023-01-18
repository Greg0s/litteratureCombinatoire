document.write(`
<header id="NavBar">
      

    <div class="firstBar">
        <a href="#" class="logo">CoMBIMaC</a>
        <navbar>
            <div class="dropbtn">Littérature & combinatoire
                <img class="underDropbtn" src="../assets/svg/arrowUp.svg"/>
            </div>

            <a class="navlink" href="./expo.html">Exposition</a>
            <a class="navlink" href="./final-projects.html">Créations</a>
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
            <a class="navlink-mobile" href="./final-projects.html">Créations</a>
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