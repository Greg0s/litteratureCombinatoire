var cercle1=document.querySelector('.cercle1');
var cercle2=document.querySelector('.cercle2');

var colors = ['#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFADAD'];

cercle1.style.background = colors[Math.floor(Math.random() * colors.length)];
var color=cercle1.style.background;
cercle1.style["box-shadow"] = '0px 0px 200px 200px '+color;

do{
    cercle2.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color2=cercle2.style.background;
}while(color2==color)

cercle2.style["box-shadow"] = '0px 0px 200px 200px '+color2;

