$(document).ready(function() {

    var bristols = ['vers1', 'vers2', 'vers3'];

    var nbIncrementations = -1 ;

    if (nbIncrementations == -1)
    {
        document.getElementById("newBristol").innerHTML = "Mélangez les bristols";
    }

    else if (nbIncrementations > -1 && nbIncrementations <= bristols.lenght)
    {
        while (nbIncrementations < bristols.lenght)
        {
            document.getElementById("newBristol").innerHTML = bristols[nbIncrementations];
        }
    }

    else 
    {
        document.getElementById("newBristol").innerHTML = "Fin du jeu";
    }

    console.log(nbIncrementations);

})


function increase(){
    nbIncrementations ++ ; 
}    
