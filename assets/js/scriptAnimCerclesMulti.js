var cercle1=document.querySelector('.cercle1');
var cercle2=document.querySelector('.cercle2');
var cercle3=document.querySelector('.cercle3');
//var cercle2=document.querySelector('.cercle4');
//var cercle2=document.querySelector('.cercle5');
//var cercle2=document.querySelector('.cercle6');
//var cercle2=document.querySelector('.cercle7');
//var cercle2=document.querySelector('.cercle8');

var colors = ['#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFADAD'];

cercle1.style.background = colors[Math.floor(Math.random() * colors.length)];
var color=cercle1.style.background;
cercle1.style["box-shadow"] = '0px 0px 100px 100px '+color;

do{
    cercle2.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color2=cercle2.style.background;
    cercle3.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color3=cercle3.style.background;    
}while(color3==color2==color)

cercle2.style["box-shadow"] = '0px 0px 100px 100px '+color2;
cercle3.style["box-shadow"] = '0px 0px 100px 100px '+color3;
