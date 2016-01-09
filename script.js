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
var topStamPS = 5;

var botStam = 5;
var botStamPS = .1;

var topStatus = 'resting';
var botStatus = 'resting';


function autoClick(){
    if (botStatus === 'resting'){
    botStam+=botStamPS;}
    Math.floor(botStam);
    document.getElementById("botStam").innerHTML= botStam.toFixed(0);
    if (botStam >= 5) {
        //document.getElementById("botStam").innerHTML= 5;
        botStam = 5;
    }
    document.getElementById("botHealth").innerHTML= botHealth.toFixed(0);
    document.getElementById("topHealth").innerHTML= topHealth.toFixed(0);
}

setInterval(autoClick, 100);
//this runs 10 times per second


function botAttack() {
    if (botStam <= 0){
        alert('out');
    }
    else {
        botStatus = 'attacking';
        setTimeout(botRest, 200);
        function botRest (){
            botStatus = 'resting'
        }
        botStam -= 1;
        topHealth -= 1;
        if (topHealth <= 0) {
            setTimeout(topDied, 100);
            function topDied() {
                alert('top player died');
                topHealth = 5;
                botStam = 5;
            }
        }
    }
}

/*attack doesn't run if stamina is empty
* if your attacking, you're status is set and stamina recovery is stopped
* if you have attacked, you lose one stamina point and your enemy loses one health point.
* if your attack made a kill, it states it and restarts the game.
* */


//functions in global only run on load

//    document.getElementById("botStam").innerHTML= botStam.toFixed(0);
