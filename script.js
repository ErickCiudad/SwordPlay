/**
 * Created by Erick on 12/27/2015.
 */
function startGame(){
    confirm('you did it');
}

function Pic(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 600;
    img.height = 300;
    img.id = 'picture';
// This next line will just add it to the <body> tag
    document.getElementById('imageBox').appendChild(img);
}

var topHealth = 5;
var botHealth = 5;
var topStam = 5;
var botStam = 5;
var botStamPS = .1;



function autoClick(){
    botStam+=botStamPS;
    document.getElementById("botStam").innerHTML= botStam.toFixed(0);
    if (botStam >= 5) {
        //document.getElementById("botStam").innerHTML= 5;
        botStam = 5;
    }
}
setInterval(autoClick, 100);
//this runs 10 times per second

document.getElementById("botStam").innerHTML= botStam.toFixed(0);

function botAttack() {
    if (botStam <= 1){
        alert('out');
        return;
    }
    botStam-=1;
}

//functions in global only run on load

