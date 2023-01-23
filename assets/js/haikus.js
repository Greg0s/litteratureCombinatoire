$(document).ready(function(){ 
    //var l1=document.getElementById("line1"); 
    generateHaiku();
    var generate = document.getElementById("generate");

});
function play() {
   
    document.querySelector("#line1").className = "flex-child";
    document.querySelector("#line2").className = "flex-child";
    document.querySelector("#line3").className = "flex-child";

    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector("#line1").className = "flex-child animate";
        document.querySelector("#line2").className = "flex-child animate";
        document.querySelector("#line3").className = "flex-child animate";

      });
    });

    document.querySelector("#line1").className = "flex-child";
    document.querySelector("#line2").className = "flex-child";
    document.querySelector("#line3").className = "flex-child";
    
  }

  function anim() {
    
   play();
    generateHaiku();
    document.querySelector("#line1").className = "flex-child";
    document.querySelector("#line2").className = "flex-child";
    document.querySelector("#line3").className = "flex-child";

    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector("#line1").className = "flex-child come";
        document.querySelector("#line2").className = "flex-child come";
        document.querySelector("#line3").className = "flex-child come";

      });
    });
    
  }

function getRandomHaiku(num){
    url = 'http://localhost/haiku/' + num;
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
            console.error("Error text haiku");
    });
}

function generateHaiku(){
    for(i = 1 ; i < 4 ; i++){
        getRandomHaiku(i);
    }
}
