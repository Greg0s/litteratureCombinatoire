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
    url = 'http://localhost/narration';
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
        /*
        // This is where you handle what to do with the response.
        id = "#line" + num;
        document.querySelector(id).innerHTML = data['text'];
        //authors
        getNarrationAuthor(data['id_narration']);
        */

        if(sameGroup){
            generateNarrationSameGroup(document.querySelector("#groupnum").innerHTML);
        }else{
            document.querySelector("#groupnum").innerHTML = data['group_num'];
            generateNarrationSameGroup(data['group_num']);
        }
    }) 
    .catch((error) => {
        // This is where you handle errors.
        console.error("Error group narration");
        return 0;
    });
}

function getRandomNarration(num, group_num){
    //console.log(group_num);
    fetch('http://localhost/narration/text', { 'body': JSON.stringify({ 'num': num, 'group_num': group_num }), method: 'POST'})
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
            getNarrationAuthorGroup(group_num);
    })
    .catch((error) => {
            // This is where you handle errors.
            console.error("Error text narration");
    });
}

function getNarrationAuthorGroup(group_num){
    url = 'http://localhost/narration/authorGroup/' + group_num;
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
            getHaikuAuthor(data[0]['id_author'], 1);
            getHaikuAuthor(data[1]['id_author'], 2);
    })
    .catch((error) => {
            console.error("Error narration author group");
    });
}

function getNarrationAuthor(id_author, num){
    fetch('http://localhost/narration/author/' + id_author)
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
            num += 1;
            document.querySelector("#author"+num).innerHTML = '';
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
    for(i = 1 ; i < 9 ; i++){
        getRandomNarration(i, group_num);
    }
}


