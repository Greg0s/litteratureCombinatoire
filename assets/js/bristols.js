$(document).ready(function() {

  let bristols = ['vers1', 'vers 2', 'vers 3'];
  

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
    count++;

    if (count >= max)
    {
      incrementCount.ariaDisabled = "true";
      text.innerHTML = "Fin du jeu";
    } 

    text.innerHTML = bristols[count];
  };

  // Add click event to buttons
  incrementCount.addEventListener("click", handleIncrement);

})
