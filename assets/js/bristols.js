$(document).ready(function() {

    var button = document.getElementById("button");
    var bristols = ['vers1', 'vers2', 'vers3'];
    bristols.push("c'est la fin");

    var  nbIncrementations = -1;
    button.addEventListener("click", IncrementCompter(nbIncrementations));

    if (nbIncrementations == -1)
    {
        document.getElementById("shuffle").innerHTML = "Mélangez les bristols";
    }

    else if (nbIncrementations > -1 && nbIncrementations <= bristols.lenght)
    {
        while (nbIncrementations < bristols.lenght)
        {
            document.getElementById("shuffle").innerHTML = bristols[nbIncrementations];
        }
    }

    else 
    {
        document.getElementById("shuffle").innerHTML = "Fin du jeu";
    }

    console.log(nbIncrementations);

})

function IncrementCompter (value)
{
    value = value + 1;
}
    

    /*else {
        console.log("fin");
        document.getElementById("shuffle").innerHTML = "c'est la fin";
    }*/

