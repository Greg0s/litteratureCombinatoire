$(document).ready(function() {
  document.querySelector("#cpt").innerHTML = 1;
  const incrementCount = document.getElementById("button");
  cptClick = 0;

  function restart(){
    document.querySelector("#text3").classList.remove('active');
    document.querySelector("#text0").classList.add('active');
    document.querySelector("#cpt").innerHTML = 1;
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~SOCKET INTERACTION~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  let socket = io("https://combimac-ws.oulico.fr");

  const btn = document.querySelector("#button");
  const restartBtn = document.getElementById("text3");

  btn.addEventListener('click', (e) => {
    cpt = document.querySelector("#cpt").innerHTML;
    if(cpt < 36){
      socket.emit('clickBristol');
      push();
    }else{
      socket.emit('restartBristol');
      restart();
    }
  });

  socket.on('receiveEvent', function() {
      push();
  });

  socket.on('receiveRestart', function() {
      restart();
  });

  function push() {
    cpt = document.querySelector("#cpt").innerHTML;
    changeText();
    cptClick ++;
  }

})

function changeText(){
  //get compteur
  cpt = document.querySelector("#cpt").innerHTML;
  //console.log(cpt);
  if(cpt == 1){
    document.querySelector("#text1").classList.add("active");
    document.querySelector("#text0").classList.remove("active");
    document.querySelector("#cpt").classList.add("active");
  }
  else if(cpt >= 34){
    num = cpt - 32;
    idAddActive = "#text" + num;
    document.querySelector(idAddActive).classList.add("active");
    num = num - 1;
    idRmActive = "#text" + num;
    document.querySelector(idRmActive).classList.remove("active");
  }
  
  //set new compteur  
  cpt = parseInt(cpt) + 1;
  document.querySelector("#cpt").innerHTML = cpt;
}