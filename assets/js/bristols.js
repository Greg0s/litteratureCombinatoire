$(document).ready(function() {

  getRandomBristolSerie();

})



function getRandomBristolSerie(){
  url = 'http://localhost/bristols/';
  fetch(url)
  .then((response) => {
      if(!response.ok){ 
          throw new Error("Something went wrong!");
      }
      console.log(response); 
      return response.json(); 
  })
  .then((data) => {
    console.log(data['id_bristol']);
    //getTaleAuthor(data['id_tale']);
    //getTextsFromSerie();
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error text bristols");
  });
}
  /*let bristols = ['vers1', 'vers 2', 'vers 3'];*/
  /*let bristols = getBristols();

  // Select increment button
  const incrementCount = document.getElementById("button");
  const text = document.getElementById("text");

  // Variable to track count
  var count = -1;
  var max = bristols.length;
  


  // Display initial message
  text.innerHTML = "Mélangez les bristols" ;


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
  };

  function generateBristolSerie();

})*/


//get random id "généraux" de bristols 