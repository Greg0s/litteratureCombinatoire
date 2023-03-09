//--------------------------------onload--------------------------------

if (localStorage.elements == undefined){localStorage.elements = JSON.stringify([]);} 
else{
  let array = JSON.parse(localStorage.elements);
  Object.keys(array).forEach(key => {
    addToPage(key, "elements");
  });
}
if (localStorage.history == undefined) localStorage.history = JSON.stringify([]);
else{
  array = JSON.parse(localStorage.history);
  Object.keys(array).forEach(key => {
    addToPage(key, "history");
  });
}
changeButtonState("elements");
changeButtonState("history");

//--------------------------------modal--------------------------------

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = resetModal();
window.onclick = function(event) {
  if (event.target == modal) {
    resetModal();
  }
}

//--------------------------------functions--------------------------------

function generateRandomPoem() {
  let elements = JSON.parse(localStorage["elements"]);
  if (Object.keys(elements).length == 0){
      document.getElementById("btn-charge").style.animationPlayState = "running";
      //reset de l'animation
      window.setTimeout(function() {
        document.getElementById("btn-charge").style.animation = 'none';
        document.getElementById("btn-charge").offsetHeight; 
        document.getElementById("btn-charge").style.animation = null;
    }, 2000);
}
  else{
    let finalpoem = {};
    for (let i = 0 ; i < Object.keys(elements[Object.keys(elements)[0]]).length ; i++){
      let rng = Math.floor(Math.random() * Object.values(elements).length);
      finalpoem[i] = elements[Object.keys(elements)[rng]][i];
    }
    printPoem(finalpoem, "poem");
    let title = "Nouveau Texte"
    if (Object.keys(JSON.parse(localStorage["history"])).length != 0) title+=Object.keys(JSON.parse(localStorage["history"])).length;
    saveInStorage("history", finalpoem, title);
  }
}

function clear(category){
  if (localStorage[category].length == 0) alert("Aucun élement"); 
  if (confirm("Voulez-vous vraiment supprimer ces éléments ? \n Cette action est irréversible.")){
    localStorage[category] = JSON.stringify([]);
    document.getElementById("poem").innerHTML = "";
    document.getElementById(category).innerHTML = "";
    changeButtonState(category);
}
}

function changeButtonState(name){
  if (Object.keys(JSON.parse(localStorage[name])).length == 0){
    document.getElementById("btn-"+name).disabled = true;
    document.getElementById("btn-"+name).className = "unclickable";
  }
  else{
    document.getElementById("btn-"+name).disabled = false; 
    document.getElementById("btn-"+name).className = "";
  }
}

function printPoem(poem, divID){
  document.getElementById(divID).innerHTML = "";
  Object.keys(poem).forEach(lineNumber => {
    if (lineNumber != 'name'){
      if (poem[lineNumber] == undefined) document.getElementById(divID).innerHTML +='<br>';
      else document.getElementById(divID).innerHTML += poem[lineNumber] + '<br>';
    }
  });
}

function loadFile(input) {
  Object.values(input.files).forEach(file => {
    let fileReader = new FileReader();
    fileReader.readAsText(file); 
    fileReader.onload = function() {
      verifCompatibility(stringToObject(fileReader.result), file.name);
    }; 
    fileReader.onerror = function() {
      alert(fileReader.error);
    }; 
  });
}

function stringToObject(string){
  while(string.includes("\r")){
    string = string.replace("\r", '');
  }
  let array = string.split('\n');
  Object.keys(array).forEach(key => {
    if (array[key] == "") delete array[key];
  });
  return Object.assign({}, array);
}

function verifCompatibility(obj, name){
  let nbLines = Object.keys(obj).length-1;
  let elements = JSON.parse(localStorage["elements"]);
  //Si le storage est vide, on créé le tableau d'éléments. 
  if (Object.keys(elements).length == 0){saveInStorage("elements", obj, name);} 
  else if (alreadyExists(name, "elements")) alert("Un fichier n'a pas pu être chargé : " + name + "\n\nLe fichier " + name + " existe déjà en mémoire.");
  //Si il y a des éléments, on vérifie que l'objet à ajouter est conforme. 
  else if (Object.values(elements[Object.keys(elements)[0]]).length-1 != nbLines){
    alert("Un fichier n'a pas pu être chargé : " + name + "\n\nLe fichier " + name + " n'a pas le bon nombre de lignes \n ("+nbLines+" lignes).\n");
  }
  //Sinon, on ajoute l'objet en mémoire.
  else{
    saveInStorage("elements", obj, name);
  } 
}

function alreadyExists(name, category){
  let array = JSON.parse(localStorage[category]);
  let bool = false;
  Object.keys(array).forEach(key => {
    if (key == name){
      bool = true;
    } 
  });
  return bool;
}

function saveInStorage(category, obj, name){
  let array = JSON.parse(localStorage[category]);
  array[name] = obj;
  localStorage[category] = JSON.stringify(Object.assign({}, array));
  addToPage(name, category);
  changeButtonState(category);
}
function addToPage(name, category){
    //Ajout d'un élément dans la div "History"
    let li = document.createElement("li");
    li.id = "li_"+category+"_"+name;
    let input = document.createElement("input");
    input.type = "button";
    input.value = name; 
    input.className = "btn";
    input.id = category+"_"+name;
    li.append(input);
    document.getElementById(category).append(li);

    //Ouverture de la modal
    document.getElementById(category+"_"+name).addEventListener("click", event=>{
      modal.style.display = "block";
      document.getElementById("title").innerHTML = event.target.value;
      updateModalData(event.target.value, category);
      printPoem(JSON.parse(localStorage[category])[event.target.value], "contentModal");
      if (category == "elements"){
        document.getElementById("rename").hidden = true;
        document.getElementById("export").hidden = true;
      }   
    });
}

function remove(name, category){
  let array = JSON.parse(localStorage[category]);
  delete array[name];
  localStorage[category] = JSON.stringify(Object.assign({}, array));
  document.getElementById("li_"+category+"_"+name).remove();
  modal.style.display = "none";
  if (Object.keys(JSON.parse(localStorage[category])).length == 0) changeButtonState(category);
}

function resetModal(){
  modal.style.display = "none";
  document.getElementById("title").innerHTML = "";
  document.getElementById("rename").hidden = false;
  document.getElementById("export").hidden = false;
  document.getElementById("delete").hidden = false;
}

function updateModalData(name, category){
  document.getElementById("delete").name = name+"_"+category;
  document.getElementById("rename").name = name+"_"+category;
  document.getElementById("export").name = name+"_"+category;
}

//--------------------------------EventListeners--------------------------------

document.getElementById("myBtn").addEventListener("click", generateRandomPoem);
document.getElementById("btn-elements").addEventListener("click", function(){clear("elements")});
document.getElementById("btn-history").addEventListener("click", function(){clear("history")});
document.getElementById("delete").addEventListener("click", event =>{
  if (confirm("Voulez-vous vraiment supprimer ce poème ? \n Cette action est irréversible.")){
    remove(event.target.name.split("_")[0], event.target.name.split("_")[1]);
    }
});
document.getElementById("rename").addEventListener("click", event =>{
  let name = event.target.name.split("_")[0];
  let category = event.target.name.split("_")[1];
  let title = prompt("Nom du fichier : ");
  while (title == ''){
    title = prompt("Le nom du fichier doit comporter au moins un caractère.");
  }
  if (title != null){
    if (alreadyExists(title, "history")) alert("Le fichier " + title + " existe déjà");
    else {
      let array = JSON.parse(localStorage[category]);
      array[title] = array[name];
      delete array[name];
      localStorage[category] = JSON.stringify(Object.assign({}, array));
      document.getElementById(category+"_"+name).value = title;
      document.getElementById(category+"_"+name).id = category+"_"+title;
      document.getElementById("li_"+category+"_"+name).id = "li_"+category+"_"+title;
      updateModalData(title, category);
      resetModal();
    }
 }
});

document.getElementById("export").addEventListener("click", event =>{
  let name = event.target.name.split("_")[0];
  let array = JSON.parse(localStorage.history)[name];
  let finalText ="";
  Object.keys(array).forEach(key => {
    finalText += array[key];
    if (key != ""+Object.keys(array).length-1) finalText +='\n';
  })
  var blob = new Blob([finalText], {type:"text/plain;charset=utf-8"});
  saveAs(blob, name);
});

document.getElementById("help").addEventListener("click", event =>{
  modal.style.display = "block";
  document.getElementById("title").innerHTML = "Guide d'utilisation";
  document.getElementById("contentModal").innerHTML = "<b>Comment ça marche ?</b> <br> 1.Chargez des poèmes en cliquant sur le bouton \"Charger des fichiers\" <br> 2. Générez un poème en cliquant sur le bouton \"Générer un poème\".<br> 3. Renommez, exportez ou supprimez les poèmes. <br><br><b>Vider la mémoire</b><br>1. Supprimez tous les fichiers chargés en cliquant sur le bouton \"Vider la mémoire\"<br>2. Supprimez un fichier en cliquant sur le poème puis sur le bouton \"Supprimer\"<br><br><b>Vider l'historique</b><br>1. Supprimez tous les poèmes générés en cliquant sur le bouton \"Vider l'historique\"<br>2. Supprimez un fichier en cliquant sur le poème puis sur le bouton \"Supprimer\"<br> ";
  document.getElementById("rename").hidden = true;
  document.getElementById("export").hidden = true;
  document.getElementById("delete").hidden = true;
});