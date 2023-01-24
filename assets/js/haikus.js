$(document).ready(function(){ 
  // getRandomGroup(function() {
  //   generateHaikuSameGroup();
  // });
  // $.when(getRandomGroup()).then(generateHaikuSameGroup());
  //let groupNum = getRandomGroup();
  getRandomHaikuNewGroup(false);

  var generate = document.getElementById("generate");
  var change = document.getElementById("change");
  
  generate.addEventListener('click', function(){
    animation(1);
    // getRandomHaikuNewGroup(true);
  })

  change.addEventListener('click', function(){
    animation(2);
    // getRandomHaikuNewGroup(false);
  })

});

function getRandomHaikuNewGroup(sameGroup){
  url = 'http://localhost/haiku';
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
          console.log(data['group_num']);
          if(sameGroup){
            generateHaikuSameGroup(document.querySelector("#groupnum").innerHTML);
          }else{
            document.querySelector("#groupnum").innerHTML = data['group_num'];
            generateHaikuSameGroup(data['group_num']);
          }
          //document.querySelector('#groupnum').innerHTML = data['group_num'];
  })
  .catch((error) => {
          // This is where you handle errors.
          console.error("Error group haiku");
          return 0;
  });
}

function getRandomHaiku(num, group_num){
  //console.log(group_num);
  fetch('http://localhost/haiku/text', { 'body': JSON.stringify({ 'num': num, 'group_num': group_num }), method: 'POST'})
  .then((response) => {
      if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
                          // check for any errors.
          // In case of an error, throw.
          throw new Error("Something went wrong!");
      }
      //console.log(response.json());
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

// function changeGroup(){
//     let group_num = getRandomGroup();
//     for(i = 1 ; i < 4 ; i++){
//         getRandomHaiku(i, group_num);
//     }
// }

function generateHaikuSameGroup(group_num){
  for(i = 1 ; i < 4 ; i++){
      getRandomHaiku(i, group_num);
  }
}

function animation(mode){
  play();
  if(mode == 1){
    setTimeout(getRandomHaikuNewGroup(true), 500);
  }else{
    setTimeout(getRandomHaikuNewGroup(false), 500);
  }
  setTimeout(anim, 500);
}

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
}

function anim() {

  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector("#line1").className = "flex-child animate come";
      document.querySelector("#line2").className = "flex-child animate come";
      document.querySelector("#line3").className = "flex-child animate come";
    });
  });
}