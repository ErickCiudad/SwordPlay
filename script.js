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

// This next line will just add it to the <body> tag
    document.getElementById('botPlayer').appendChild(img);
}

function botReplacePic() {
    botPicture.parentNode.removeChild(botPicture)
}



var topHealth = 5;
var botHealth = 5;

var topStam = 5;
var topStamPS = .2;

var botStam = 5;
var botStamPS = .2;

var topStatus = 'resting';
var botStatus = 'resting';


botPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');



function autoClick(){

    if (botStatus === 'resting'){

          ///Stamina check

    botStam+=botStamPS;}

    document.getElementById("botStam").innerHTML= botStam.toFixed(0);
    if (botStam >= 5) {
        botStam = 5;
    }

    if (topStatus === 'resting'){

    topStam+=topStamPS;}
document.getElementById("topStam").innerHTML= topStam.toFixed(0);
if (topStam >= 5) {
    topStam = 5;
}

    document.getElementById("botHealth").innerHTML= botHealth.toFixed(0);
    document.getElementById("topHealth").innerHTML= topHealth.toFixed(0);

}

setInterval(autoClick, 100);
//this runs 10 times per second




function botAttack() {
    if (botStam < 1){

    }
    else if (botStatus === 'attacking') {

    }
    else {
        botStatus = 'attacking';
        botReplacePic();
        setTimeout(botPic('https://www.thetwozen.com/wp-content/uploads/2015/10/angry-hugh-jackman.jpg'),100);

        setTimeout(botRest, 350);
        //launched attack
        botStam -= 1;
        if (topStatus === 'resting'){
        topHealth -= 1;
        topReplacePic();
        setTimeout(topPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),200);
        setTimeout(topRest,400);}
        //if he's chilling, hurt him
        if (topStatus === 'blocking'){
            topStam--;
            //if he's blocking, hurt stamina
            if (botStam < 1) {
                topStatus = 'stunned';
                alert('top player stunned')
            }
            //and if this stamina taken away, stun him

        }

        if (topHealth <= 0) {
            setTimeout(topDied, 100);
            function topDied() {
                alert('top player died');
                topHealth = 5;
                botHealth = 5;
                topStam = 5;
                botStam = 5;
            }
        }
    }
}

function botBlock(){

    if (botStam < 0){
        return;
    }
    botStatus = 'blocking';
        botReplacePic();
        setTimeout(botPic('http://thumb7.shutterstock.com/display_pic_with_logo/92657/92657,1251642732,11/stock-photo-man-trying-to-protect-himself-with-his-arms-36161041.jpg'), 100)
}



function botRest (){
    botStatus = 'resting';
    botReplacePic();
    botPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');
}

    document.onkeydown = checkKey;

function checkKey(e, b, u, te, tb, tu) {

    e = e || window.event;
    b = b || window.event;
    u = u || window.event;
    te = te || window.event;
    tb = tb || window.event;
    tu = tu || window.event;
    if (e.keyCode == '38') {
        // up arrow
        botAttack();
    }
    else if (b.keyCode == '40') {
        // down arrow
        botBlock();
    }

    else if (u.keyCode == '37') {
        botRest();
        // left arrow
    }
    else if (e.keyCode == '39') {
        // right arrow
    }

    else if (te.keyCode == '87') {
    topAttack();
    }

    else if (tb.keyCode == '83') {
        topBlock();
    }

    else if (tu.keyCode == '65') {
        topRest();
    }


}

function checkKeyUp(ub){
    ub = ub || window.event;
    if (ub.keyCode == '40') {
        // down arrow released
        alert('unblock');
        botRest();
    }
}
///////////////////////////////
//TOP PLAYER BEGINS//
///////////////////////////////
function topPic(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 210;
    img.height = 230;
    img.id = 'topPicture';

// This next line will just add it to the <body> tag
    document.getElementById('topPlayer').appendChild(img);
}

function topReplacePic() {
    topPicture.parentNode.removeChild(topPicture)
}

topPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');

function topAttack() {
    if (topStam < 1){

    }
    else if (topStatus === 'attacking') {

    }
    else {
        topStatus = 'attacking';
        topReplacePic();
        setTimeout(topPic('https://www.thetwozen.com/wp-content/uploads/2015/10/angry-hugh-jackman.jpg'),100);

        setTimeout(topRest, 350);
        //launched attack
        topStam -= 1;
        if (botStatus === 'resting'){
            botHealth -= 1;
            botReplacePic();
            setTimeout(botPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),200);
            setTimeout(botRest,400);}
        //if he's chilling, hurt him
        else if (botStatus === 'blocking'){
            botStam--;
            //if he's blocking, hurt stamina
            if (botStam < 1) {
                botStatus = 'stunned';
                alert('bot player stunned')
            }
            //and if this stamina taken away, stun him

        }

        if (botHealth <= 0) {
            setTimeout(botDied, 100);
            function botDied() {
                alert('bot player died');
                topHealth = 5;
                botHealth = 5;
                topStam = 5;
                botStam = 5;
            }
        }
    }
}


function topRest (){
    topStatus = 'resting';
    topReplacePic();
    topPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');
}

function topBlock(){

    if (topStam < 0){
        return;
    }
    topStatus = 'blocking';
    topReplacePic();
    setTimeout(topPic('http://thumb7.shutterstock.com/display_pic_with_logo/92657/92657,1251642732,11/stock-photo-man-trying-to-protect-himself-with-his-arms-36161041.jpg'), 100)
}
/*attack doesn't run if stamina is empty
* if your attacking, you're status is set and stamina recovery is stopped
* if you have attacked, you lose one stamina point and your enemy loses one health point.
* if your attack made a kill, it states it and restarts the game.
* */

/*function botTired(){
 if (botStam <= 0) {
 botReplacePic();
 setTimeout(botPic('http://www.bioathletic.com.au/wp-content/uploads/2013/03/rec-exhausted-athlete-09-28-11-B2UFA9-md.jpg'), 100);
 }
 if (botStam >= 1) {
 botRest();
 }
 }*/

//functions in global only run on load
//Resting // http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg
//Pain   //    http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg

/*function checkStatus () {
    console.log(botStatus)
}
setInterval(checkStatus, 100)*/
