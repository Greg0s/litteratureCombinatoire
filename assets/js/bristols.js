$(document).ready(function() {

    var bristols = ['vers1', 'vers 2', 'vers 3'];

// Select increment button
const incrementCount = document.getElementById("button");
const text = document.getElementById("text");

// Variable to track count
var count = -1;

// Display initial message
text.innerHTML = "Mélangez les bristols" ;


// Function to increment count
const handleIncrement = () => {
  count++;
  text.innerHTML = bristols[count];
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);

})
