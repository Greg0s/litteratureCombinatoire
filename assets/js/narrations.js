var mode;

$(document).ready(function(){  
    generateNarration();
    var generate = document.getElementById("generate");
    generate.onclick = generateNarration;
});

/* ----- First generation ----- */

function getRandomNarration(num){
    url = 'http://localhost/narrationrand/' + num;
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
            getNarrationAuthor(/*data['id_narration']*/1);
    }) 
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error text narration");
    });
}

function generateNarration(){
    for(i = 1 ; i < 9 ; i++){
        getRandomNarration(i);
    }
}

function getNarrationAuthor(id){
    url = 'http://localhost/narration/authors/' + id;
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
            document.querySelector('#author1').innerHTML = data[0]['first_name'] + ' ' + data[0]['name'];
            document.querySelector('#author2').innerHTML = data[1]['first_name'] + ' ' + data[1]['name'];
    })
    .catch((error) => {
            console.error("Error narration author");
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

