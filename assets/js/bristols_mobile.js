$(document).ready(function() {
  document.querySelector("#cpt").innerHTML = 1;
  const incrementCount = document.getElementById("button");
  cptClick = 0;

  //reload next bristols in advance when clicking author
  // const reload = document.getElementById("text35");
  // reload.addEventListener('click', function(){
  //   getRandomBristolSerie();
  // })
  
  const restartBtn = document.getElementById("text3");
  restartBtn.onclick = restart;

  function restart(){
    getRandomBristolSerie();
    document.querySelector("#text35").classList.remove('active');
    document.querySelector("#text0").classList.add('active');
    document.querySelector("#cpt").innerHTML = 1;

  }

  // const restart = document.getElementById("text34");
  // restart.onmouseover = function(){
  //   restart.innerHTML = "Recommencer";
  // }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~SOCKET INTERACTION~~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  let socket = io("http://localhost:5000");

  let btn = document.querySelector("#button");

  btn.addEventListener('click', (e) => {
      socket.emit('clickBristol');
  });

  restartBtn.addEventListener('click', (e) => {
    socket.emit('restartBristol');
  });

  socket.on('receiveEvent', function() {
      push();
  });

  socket.on('receiveRestart', function() {
      restart();
  });

  function push() {
    // alert('yo');
    cpt = document.querySelector("#cpt").innerHTML;
    if(cpt < 36){
      changeVers();
      if(cpt > 2 && cpt < 34){
        placeHorizontal();
        placeVertical();
        play();
      }
      console.log(cptClick);
      cptClick ++;
    }
  }

})

function getRandomBristolSerie(){
  url = 'http://localhost/bristols';
  fetch(url)
  .then((response) => {
      if(!response.ok){ 
          throw new Error("Something went wrong!");
      } 
      return response.json(); 
  })
  .then((data) => {
    //console.log(data['id_bristol']);
    getTextsFromSerie(data['id_bristol']);
    getAuthor(data['id_author']);
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error text bristols");
  });
}


function getTextsFromSerie(id){
  url = 'http://localhost/bristols/serie/' + id;
  fetch(url)
  .then((response) => {
      if(!response.ok){ 
          throw new Error("Something went wrong!");
      } 
      return response.json(); 
  })
  .then((data) => {
    // document.querySelector("#text1").innerHTML=data[0]['text'];
    cpt = 1;
    data.forEach(element => {
      idToWrite = "#text" + cpt;
      idToAnimateHorizontal = "#bgtext" + cpt;
      idToAnimateVertical = "#bgtext" + (cpt + 33); 
      
      //console.log(idToWrite);
      document.querySelector(idToWrite).innerHTML = element['text'];
      document.querySelector(idToAnimateHorizontal).innerHTML = element['text'];
      document.querySelector(idToAnimateVertical).innerHTML = element['text'];

      //console.log(element['text']);
      cpt++;
    });
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error text bristols");
  });
}

function changeVers(){
  //get compteur
  cpt = document.querySelector("#cpt").innerHTML;
  idAddActive = "#text" + cpt;

  console.log(idAddActive);
  if(cpt >= 34){
    num = cpt - 32;
    idAddActive = "#bgtext" + num;
    document.querySelector(idAddActive).classList.add("active");
  }
  cpt -= 1;
  num = cpt - 32;
  idRmActive = "#text" + num;
  //console.log(idRmActive);
  document.querySelector(idRmActive).classList.remove("active");
  //set new compteur  
  cpt += 2;
  document.querySelector("#cpt").innerHTML = cpt;
}


function play() {
   
  cpt = document.querySelector("#cpt").innerHTML;
  idAddActiveBgHorizontal = "#bgtext" + (cpt - 2);

  idAddActiveBgVertical = "#bgtext" + (parseInt(cpt) + 31);
  console.log(idAddActiveBgHorizontal);
  console.log(idAddActiveBgVertical);


  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
        document.querySelector(idAddActiveBgHorizontal).className = "bgTextHorizontal animateHorizontal";
        document.querySelector(idAddActiveBgVertical).className = "bgTextVertical animateVertical";
    });
  });   
}

function placeHorizontal () 
{
  cpt = document.querySelector("#cpt").innerHTML;
  idAddActiveBg = "#bgtext" + (cpt-2);
  
  text = document.querySelector(idAddActiveBg) ;
  text.style.top = getRandomArbitrary(15,93) + '%';
}

function placeVertical () {

  cpt = document.querySelector("#cpt").innerHTML;
  idAddActiveBg = "#bgtext" + (parseInt(cpt)+31) ;  //index cpt - 2 + 33 to get the vertical texts spans ids
  console.log(idAddActiveBg);
  text = document.querySelector(idAddActiveBg) ;
  text.style.left = getRandomVertical(0,93) + '%';
  console.log(text.style.left);
}


/*function changeVers(data)
{

  // Select increment button
  const incrementCount = document.getElementById("button");
  const text = document.getElementById("text");

  // Variable to track count
  var count = -1;
  var max = data.length;

  // Display initial message
  text.innerHTML = "Mélangez les bristols";

  button.addEventListener ("click", handleIncrement());

}

// Function to increment count

const handleIncrement = () => {
  if (count >= max)
  {
    document.getElementById('button').disabled = true;
    text.innerHTML = "Fin du jeu";

    if (count < max)
    {
      text.innerHTML = bristols[count];
      count ++ ;
    }
  }
}*/



function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function getRandomVertical(min,max) {
  random_sign = Math.cos( Math.PI * Math.round( Math.random() ) );
  return random_sign * Math.floor(Math.random() * (max - min) + min);
}


