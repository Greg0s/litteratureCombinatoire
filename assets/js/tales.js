$(document).ready(function(){  
    getRandomTale();
});


function getRandomTale(){
    url = 'http://localhost/tale';
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        return response.json(); 
    })
    .then((data) => {
            // console.log(data['id_tale']);
            //title
            document.querySelector('#title').innerHTML = data['title'];
            //author
            getTaleAuthor(data['id_tale']);
            //1st text
            getTaleText(1, 1);
    })
    .catch((error) => {
            console.error("Error tale");
    });
}

function getTaleAuthor($id){
    url = 'http://localhost/tale/author/' + $id;
    fetch(url)
    .then((response) => {
        if(!response.ok){ 
            throw new Error("Something went wrong!");
        }
        //console.log(response);
        return response.json(); 
    })
    .then((data) => {
            console.log(data['name']);
            document.querySelector('#author').innerHTML = data['first_name'] + ' ' + data['name'];
    })
    .catch((error) => {
            console.error("Error tale author");
    });
}

function getTaleText($id){
    url ='http://localhost/tale/text/' + $id;
    // let params = [['id', $id], ['num', $num]]
    // url.search = new URLSearchParams(params).toString();
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Something went wrong!");
        }
        console.log(response);
        return response.json();
    })
    .then((data) => {
            console.log(data['text']);
            document.querySelector('#text').innerHTML = data['text'];
    })
    .catch((error) => {
            console.error("Error tale texts");
    });
    
}