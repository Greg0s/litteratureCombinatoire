var cercle1=document.querySelector('.cercle1');
var cercle2=document.querySelector('.cercle2');
var cercle3=document.querySelector('.cercle3');
var cercle4=document.querySelector('.cercle4');
var cercle5=document.querySelector('.cercle5');
var cercle6=document.querySelector('.cercle6');
var cercle7=document.querySelector('.cercle7');


var colors = ['#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFADAD'];


cercle1.style.background = colors[Math.floor(Math.random() * colors.length)];
var color=cercle1.style.background;
cercle1.style["box-shadow"] = '0px 0px 100px 100px '+color;


do{
    cercle2.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color2=cercle2.style.background;

    cercle3.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color3=cercle3.style.background;

    cercle4.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color4=cercle4.style.background;

    cercle5.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color5=cercle5.style.background;

    cercle6.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color6=cercle6.style.background;

    cercle7.style.background = colors[Math.floor(Math.random() * colors.length)];
    var color7=cercle7.style.background;

}while (color==color2 && color2==color3 && color3==color4 && color5==color6 && color6==color7)



cercle2.style["box-shadow"] = '0px 0px 100px 100px '+color2;
cercle3.style["box-shadow"] = '0px 0px 100px 100px '+color3;
cercle4.style["box-shadow"] = '0px 0px 100px 100px '+color4;
cercle5.style["box-shadow"] = '0px 0px 100px 100px '+color5;
cercle6.style["box-shadow"] = '0px 0px 100px 100px '+color6;
cercle7.style["box-shadow"] = '0px 0px 100px 100px '+color7;


cercle1.style.top = 20+'%';
cercle1.style.left = 10+'%';

cercle2.style.top = 30+'%';
cercle2.style.left = 70+'%';

cercle3.style.top = 45+'%';
cercle3.style.left = 30+'%';

cercle4.style.top = 60+'%';
cercle4.style.left = 80+'%';

cercle5.style.top = 78+'%';
cercle5.style.left = 20+'%';

cercle6.style.top = 89+'%';
cercle6.style.left = 70+'%';

cercle7.style.top = 95+'%';
cercle7.style.left = 60+'%';
