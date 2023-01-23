$(document).ready(function(){  
    generateNarration();
    var generate = document.getElementById("generate");
    generate.onclick = generateNarration;
});

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
            console.log(id)
            document.querySelector(id).innerHTML = data['text'];
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