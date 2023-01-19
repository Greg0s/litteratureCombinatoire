$(document).ready(function(){  
    generateSonnet();
    var generate = document.getElementById("generate");
    generate.onclick = generateSonnet;
});


function getRandomSonnet(num){
    url = 'http://localhost/sonnet/' + num;
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        return response.json(); // Parse the JSON data.
    })
    .then((data) => {// Handle what to do with the response.
            id = "#line" + num;
            console.log(id)
            document.querySelector(id).innerHTML = data['text'];
    })
    .catch((error) => {// Handle errors.
            console.error("Error text sonnet");
    });
}

function generateSonnet(){
    for(i = 1 ; i < 15 ; i++){
        getRandomSonnet(i);
    }
}
