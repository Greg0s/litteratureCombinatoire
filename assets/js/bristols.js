$(document).ready(function() {

  getRandomBristolSerie();
  document.getElementById("text").innerHTML = "mélangez les bristols";

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
    console.log(data['id_bristol']);
    getTextsFromSerie(data['id_bristol']);
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
    console.log(data[0]['text']);
   // changeVers();
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error text bristols");
  });
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







  






