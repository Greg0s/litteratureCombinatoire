$(document).ready(function() {
  getRandomBristolSerie();
  //document.getElementById("text").innerHTML = "mélangez les bristols";
  document.querySelector("#cpt").innerHTML = 1;
  const incrementCount = document.getElementById("button");
  cptClick = 0;
  incrementCount.addEventListener('click', function(){
    // console.log(document.querySelector("#cpt").innerHTML);
    if(document.querySelector("#cpt").innerHTML < 36){
      changeVers();
      place();
      play();
      console.log(cptClick);
      cptClick ++;
    }
  })

  //reload next bristols in advance when clicking author
  const reload = document.getElementById("text34");
  reload.addEventListener('click', function(){
    getRandomBristolSerie();
  })
  
  const restart = document.getElementById("text35");
  restart.addEventListener('click', function(){
    //getRandomBristolSerie();
    document.querySelector("#text35").classList.remove('active');
    document.querySelector("#text0").classList.add('active');
    document.querySelector("#cpt").innerHTML = 1;
    
    foreachdocument.querySelectorAll('.bgtext').forEach(element => {
      element.classList.remove('active');
    });
  })

  // const restart = document.getElementById("text34");
  // restart.onmouseover = function(){
  //   restart.innerHTML = "Recommencer";
  // }

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
      idToAnimate = "#bgtext" + cpt;
      //console.log(idToWrite);
      document.querySelector(idToWrite).innerHTML = element['text'];
      document.querySelector(idToAnimate).innerHTML = element['text'];
      //console.log(element['text']);
      cpt++;
    });
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error text bristols");
  });
}

function getAuthor(id){
  url = 'http://localhost/author/' + id;
  fetch(url)
  .then((response) => {
      if(!response.ok){ 
          throw new Error("Something went wrong!");
      } 
      return response.json(); 
  })
  .then((data) => {
    document.querySelector("#text34").innerHTML = "Par " + data['first_name'] + " " + data['name'];
    console.log(document.querySelector("#text34").innerHTML);
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
  document.querySelector(idAddActive).classList.add("active");
  if(cpt < 34){
    idAddActiveBg = "#bgtext" + cpt;
    document.querySelector(idAddActiveBg).classList.add("active");
  }
  cpt -= 1;
  idRmActive = "#text" + cpt;
  //console.log(idRmActive);
  document.querySelector(idRmActive).classList.remove("active");
  //set new compteur  
  cpt += 2;
  document.querySelector("#cpt").innerHTML = cpt;
}


function play() {
   
  cpt = document.querySelector("#cpt").innerHTML;
  idAddActiveBg = "#bgtext" + (cpt-2);
  console.log(idAddActiveBg);

  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
        document.querySelector(idAddActiveBg).className = "bgtext animate";
    });
  });   
}

function place () 
{
  cpt = document.querySelector("#cpt").innerHTML;
  idAddActiveBg = "#bgtext" + (cpt-2);
  
  text = document.querySelector(idAddActiveBg) ;
  text.style.top = getRandomArbitrary(0,80) + '%';
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
  return Math.random() * (max - min) + min;
}