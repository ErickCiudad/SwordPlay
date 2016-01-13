/**
 * Created by Erick on 12/27/2015.
 */
function startGame(){
    confirm('you did it');
}

function botPic(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 210;
    img.height = 230;
    img.id = 'botPicture';

    function replacePic() {
        botPicture.parentNode.removeChild(botPicture)
    }

// This next line will just add it to the <body> tag
    document.getElementById('botPlayer').appendChild(img);
}

var topHealth = 5;
var botHealth = 5;

var topStam = 5;
var topStamPS = 5;

var botStam = 5;
var botStamPS = .1;

var topStatus = 'resting';
var botStatus = 'resting';

var botImage = 1;


function picCheck() {
    if (botImage === 1) {
    if (botStatus === 'resting') {
botPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');}
        botImage-=1;
    }

}
setInterval(picCheck, 100);

function autoClick(){
    if (botStatus === 'resting'){

          ///Stamina check

    botStam+=botStamPS;}
    Math.floor(botStam);
    document.getElementById("botStam").innerHTML= botStam.toFixed(0);
    if (botStam >= 5) {
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
        setTimeout(botRest, 200); //used to be 200
        function botRest (){
            botStatus = 'resting';
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
function show_image(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function delete_image() {
    test.parentNode.removeChild(test);
}

/* if (botImage === 'FULL') {return;} else{
 botPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');}

 ANGRY PICTURE
 https://www.thetwozen.com/wp-content/uploads/2015/10/angry-hugh-jackman.jpg

 */
