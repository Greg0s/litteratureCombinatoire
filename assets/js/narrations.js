var mode;

$(document).ready(function(){  
    generateNarration();
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
            keepVerse(parseInt(document.activeElement.id[4]));
        }
        else {
            getRandomNarration(parseInt(document.activeElement.id[4]));
        }
    })
});

/* ----- First generation ----- */

function getRandomNarration(num){
    url = 'http://localhost/narration/' + num;
    fetch(url)
    .then((response) => {
        if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
                            // check for any errors.
            // In case of an error, throw.
            throw new Error("Something went wrong!");
        }
        // console.log(response);
        return response.json(); // Parse the JSON data.
    })
    .then((data) => {
            // This is where you handle what to do with the response.
            id = "#line" + num;
            document.querySelector(id).innerHTML = data['text'];
            //authors
            getNarrationAuthor(data['id_narration']);
    }) /*
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error text narration");
    }) */ ;
}

function generateNarration(){
    for(i = 1 ; i < 9 ; i++){
        getRandomNarration(i);
    }
}

function getNarrationAuthor(id){
    url = 'http://localhost/narration/author/' + id;
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        //console.log(response);
        return response.json(); 
    })
    .then((data) => {
            //console.log(data['name']);
            document.querySelector('#author').innerHTML = data['first_name'] + ' ' + data['name'];
    })
    .catch((error) => {
            console.error("Error tale author");
    });
}

/* ----- Next generations ----- */

/* Keep */
function keepVerse(num){
    for (let i = 1; i < num; i++) {
        getRandomNarration(i);
    }
    for (let i = num + 1; i < 9; i++) {
        getRandomNarration(i);
    }
}

