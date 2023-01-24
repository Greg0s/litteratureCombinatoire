$(document).ready(function(){  
    generateSonnet();
    /*
    var generate = document.getElementById("generate");
    generate.onclick = generateSonnet;
    */
    var keep = document.getElementById("keep");
    var replace = document.getElementById("replace");

    /* select mode */
    keep.addEventListener('click', function(){
        mode = "keep";
        keep.className = "activeMode";
        replace.className = "unactiveMode";
    })
    replace.addEventListener('click', function(){
        mode = "replace";
        replace.className = "activeMode";
        keep.className = "unactiveMode";
    });

    /* action */
    document.addEventListener('click', function() {
        if (mode == "keep") {
            keepVerse(parseInt((document.activeElement.id.slice(-2)).split('e').join("")));
            console.log((document.activeElement.id.slice(-2)).split('e').join(""));
        }
        else {
            getRandomSonnet(parseInt((document.activeElement.id.slice(-2)).split('e').join("")));
            console.log((document.activeElement.id.slice(-2)).split('e').join(""));
        }
    })
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

/* Keep */
function keepVerse(num){
    for (let i = 1; i < num; i++) {
        getRandomSonnet(i);
    }
    for (let i = num + 1; i < 15; i++) {
        getRandomSonnet(i);
    }
}