$(document).ready(function() {

    var button = document.getElementById("button");
    var bristols = ['vers1', 'vers2', 'vers3'];
    bristols.push("c'est la fin");

    var  nbIncrementations = 0; 
 

    button.addEventListener("click", moveInTheArray(bristols, nbIncrementations));

    })



    function moveInTheArray(array, i)
    {
        i++; 
        document.getElementById("shuffle").innerHTML = array[i];
    }
    

    /*else {
        console.log("fin");
        document.getElementById("shuffle").innerHTML = "c'est la fin";
    }*/

