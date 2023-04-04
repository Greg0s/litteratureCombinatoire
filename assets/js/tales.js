$(document).ready(function(){  
    getRandomTale();

    document.querySelectorAll('.option').forEach(item => {
        item.addEventListener('click', function(){
            getNextText(item.id);
        })
    });

    var restartBtn = document.querySelector("#restart");
    restartBtn.addEventListener('click', function(){
        restartTale();
        document.querySelectorAll('.option').forEach(item => {
            item.style.display = 'block';
        });
    })

    var change = document.querySelector("#change");
    change.addEventListener('click', function(){
        getRandomTale();
        document.querySelectorAll('.option').forEach(item => {
            item.style.display = 'block';
        });
    })
});

function getRandomTale(){
    url = routeUrl + '/tale';
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        return response.json(); 
    })
    .then((data) => {
            //console.log(data['id_tale']);
            //id tale
            if(data['id_tale'] == document.querySelector('#currentTaleId').innerHTML){
                getRandomTale();
            }else{
                id_tale = data['id_tale'];
                document.querySelector('#currentTaleId').innerHTML = data['id_tale'];
                //title
                document.querySelector('#title').innerHTML = data['title'];
                //author
                getTaleAuthor(data['id_tale']);
                //1st text
                getTaleText(data['id_first_text']);
            }
    })
    .catch((error) => {
            console.error("Error tale");
    });
}

function getTale(id){
    url = routeUrl + '/talebyid/' + id;
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        return response.json(); 
    })
    .then((data) => {
            //title
            document.querySelector('#title').innerHTML = data['title'];
            //author
            getTaleAuthor(data['id_tale']);
            //1st text
            getTaleText(data['id_first_text']);
    })
    .catch((error) => {
            console.error("Error tale");
    });
}

function getTaleAuthor(id){
    url = routeUrl + '/tale/author/' + id;
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

function getTaleText(id){
    url = routeUrl + '/tale/text/' + id;
    // let params = [['id', $id], ['num', $num]]
    // url.search = new URLSearchParams(params).toString();
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Something went wrong!");
        }
        //console.log(response);
        return response.json();
    })
    .then((data) => {
            //console.log(data['text']);
            document.querySelector('#text').innerHTML = data['text'];
            getTextChoices(id, 0);
            getTextChoices(id, 1);
    })
    .catch((error) => {
            console.error("Error tale texts");
    });
    
}

function getTextChoices(id_text, choice_num){
    url = routeUrl + '/text/choices/' + id_text;
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Something went wrong!");
        }
        //console.log(response);
        return response.json();
    })
    .then((data) => {
        //console.log(data['error']);
        if(data['error'] != undefined){
            document.querySelectorAll('.option').forEach(item => {
                item.style.display = 'none';
            });
            // document.querySelector('.choice0').style.display('none');
        }else{
            let htmlIdChoice = '.choice' + choice_num;
            //console.log(htmlIdChoice);
            document.querySelector(htmlIdChoice).innerHTML = data[choice_num]['choice_text'];
            //add id to next text in id attribute
            document.querySelector(htmlIdChoice).setAttribute('id','text_' + data[choice_num]['id_text_next']);
        }
    })
    .catch((error) => {
            console.error("Error tale texts");
    });
    
}

function getNextText(idName){
    let htmlId = '#' + idName;
    //console.log(htmlId);
    //to manage 2 digits id
    id = document.querySelector(htmlId).id.slice(-3);
    id = id.split('_').join("");
    id = id.split('t').join("");
    //console.log(id);

    getTaleText(id);
    getTextChoices(id, 0);
    getTextChoices(id, 1);
}

function restartTale(){
    getTale(document.querySelector('#currentTaleId').innerHTML);
}