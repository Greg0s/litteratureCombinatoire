$(document).ready(function(){  
    /*
    generateNarration();
    var generate = document.getElementById("generate");
    generate.onclick = generateNarration;
    */
    getRandomNarrationNewGroup(false);

    var generate = document.getElementById("generate");
    var change = document.getElementById("change");

    generate.addEventListener('click', function(){
        getRandomNarrationNewGroup(true);
    })

    change.addEventListener('click', function(){
        getRandomNarrationNewGroup(false);
    })

});

function getRandomNarrationNewGroup(sameGroup){
    url = routeUrl + '/narration';
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
        if(sameGroup){
            generateNarrationSameGroup(document.querySelector("#groupnum").innerHTML);
        }else{
            if(data['group_num'] ==  document.querySelector("#groupnum").innerHTML){
                getRandomNarrationNewGroup(false);
            }else{
                document.querySelector("#groupnum").innerHTML = data['group_num'];
                generateNarrationSameGroup(data['group_num']);
            }
        }
    }) 
    .catch((error) => {
        // This is where you handle errors.
        console.error("Error group narration");
        return 0;
    });
}

function getNarrationText(num, id_narration){
    //console.log(group_num);
    fetch(routeUrl + '/narration/text', { 'body': JSON.stringify({ 'num': num, 'id_narration': id_narration }), method: 'POST'})
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
            //console.log(id)
            document.querySelector(id).innerHTML = data['text'];
            
    })
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error text narration");
    });
}

function getRandomNarration(num, group_num){
    //console.log(group_num);
    fetch(routeUrl + '/narration/textGroup/' +  group_num)
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
        getNarrationText(num, data['id_narration']);            
    })
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error text narration");
    });
}

function getNarrationAuthorGroup(group_num){
    url = routeUrl + '/narration/authorGroup/' + group_num;
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        return response.json(); 
    })
    .then((data) => {
        /*
            document.querySelector('#author1').innerHTML = data[0]['first_name'] + ' ' + data[0]['name'];
            document.querySelector('#author2').innerHTML = data[1]['first_name'] + ' ' + data[1]['name'];
            */
            getNarrationAuthor(data[0]['id_author'], 1);
            getNarrationAuthor(data[1]['id_author'], 2);
    })
    .catch((error) => {
            console.error("Error narration author group");
    });
}

function getNarrationAuthor(id_author, num){
    fetch(routeUrl + '/narration/author/' + id_author)
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
        if(num == 1){
            document.querySelector("#author"+num).innerHTML = data['first_name'] + " " + data['name'];
        }
        else{
            document.querySelector("#author"+num).innerHTML = " et " + data['first_name'] + " " + data['name'];
        }
    })
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error author narration");
    });
}

function generateNarrationSameGroup(group_num){
    getNarrationAuthorGroup(group_num);
    for(i = 1 ; i < 9 ; i++){
        getRandomNarration(i, group_num);
    }
}


