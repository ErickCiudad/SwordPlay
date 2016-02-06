/**
 * Created by Erick on 12/27/2015.
 */
function daRules(){
    document.getElementById('game').style.display = 'none';
    document.getElementById('rules').style.display = 'block';
}
function daGame(){
    document.getElementById('game').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
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



var topHealth = 10;
var botHealth = 10;

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

    //document.getElementById("botStam").innerHTML= botStam.toFixed(0);
    if (botStam >= 5) {
        botStam = 5;
    }

    if (topStatus === 'resting'){

    topStam+=topStamPS;}
//document.getElementById("topStam").innerHTML= topStam.toFixed(0);
if (topStam >= 5) {
    topStam = 5;
}

    //document.getElementById("botHealth").innerHTML= botHealth.toFixed(0);
    //document.getElementById("topHealth").innerHTML= topHealth.toFixed(0);

    if (topHealth === 10) {
        document.getElementById('topHeart10').style.display = 'block';
        document.getElementById('topHeart9').style.display = 'block';
        document.getElementById('topHeart8').style.display = 'block';
        document.getElementById('topHeart7').style.display = 'block';
        document.getElementById('topHeart6').style.display = 'block';
        document.getElementById('topHeart5').style.display = 'block';
        document.getElementById('topHeart4').style.display = 'block';
        document.getElementById('topHeart3').style.display = 'block';
        document.getElementById('topHeart2').style.display = 'block';
        document.getElementById('topHeart1').style.display = 'block';
    }

    if (topHealth === 9) {
        document.getElementById('topHeart10').style.display = 'none';
    }
    if (topHealth === 8) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
    }
    if (topHealth === 7) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
    }
    if (topHealth === 6) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
    }
    if (topHealth === 5) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
    }
    if (topHealth === 4) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
        document.getElementById('topHeart5').style.display = 'none';
    }
    if (topHealth === 3) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
        document.getElementById('topHeart5').style.display = 'none';
        document.getElementById('topHeart4').style.display = 'none';
    }
    if (topHealth === 2) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
        document.getElementById('topHeart5').style.display = 'none';
        document.getElementById('topHeart4').style.display = 'none';
        document.getElementById('topHeart3').style.display = 'none';
    }
    if (topHealth === 1) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
        document.getElementById('topHeart5').style.display = 'none';
        document.getElementById('topHeart4').style.display = 'none';
        document.getElementById('topHeart3').style.display = 'none';
        document.getElementById('topHeart2').style.display = 'none';
    }
    if (topHealth <= 0) {
        document.getElementById('topHeart10').style.display = 'none';
        document.getElementById('topHeart9').style.display = 'none';
        document.getElementById('topHeart8').style.display = 'none';
        document.getElementById('topHeart7').style.display = 'none';
        document.getElementById('topHeart6').style.display = 'none';
        document.getElementById('topHeart5').style.display = 'none';
        document.getElementById('topHeart4').style.display = 'none';
        document.getElementById('topHeart3').style.display = 'none';
        document.getElementById('topHeart2').style.display = 'none';
        document.getElementById('topHeart1').style.display = 'none';
    }

    if (botHealth === 10) {
        document.getElementById('botHeart10').style.display = 'block';
        document.getElementById('botHeart9').style.display = 'block';
        document.getElementById('botHeart8').style.display = 'block';
        document.getElementById('botHeart7').style.display = 'block';
        document.getElementById('botHeart6').style.display = 'block';
        document.getElementById('botHeart5').style.display = 'block';
        document.getElementById('botHeart4').style.display = 'block';
        document.getElementById('botHeart3').style.display = 'block';
        document.getElementById('botHeart2').style.display = 'block';
        document.getElementById('botHeart1').style.display = 'block';
    }

    if (botHealth === 9) {
        document.getElementById('botHeart10').style.display = 'none';
    }
    if (botHealth === 8) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
    }
    if (botHealth === 7) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
    }
    if (botHealth === 6) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
    }
    if (botHealth === 5) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
    }
    if (botHealth === 4) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
        document.getElementById('botHeart5').style.display = 'none';
    }
    if (botHealth === 3) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
        document.getElementById('botHeart5').style.display = 'none';
        document.getElementById('botHeart4').style.display = 'none';
    }
    if (botHealth === 2) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
        document.getElementById('botHeart5').style.display = 'none';
        document.getElementById('botHeart4').style.display = 'none';
        document.getElementById('botHeart3').style.display = 'none';
    }
    if (botHealth === 1) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
        document.getElementById('botHeart5').style.display = 'none';
        document.getElementById('botHeart4').style.display = 'none';
        document.getElementById('botHeart3').style.display = 'none';
        document.getElementById('botHeart2').style.display = 'none';
    }
    if (botHealth <= 0) {
        document.getElementById('botHeart10').style.display = 'none';
        document.getElementById('botHeart9').style.display = 'none';
        document.getElementById('botHeart8').style.display = 'none';
        document.getElementById('botHeart7').style.display = 'none';
        document.getElementById('botHeart6').style.display = 'none';
        document.getElementById('botHeart5').style.display = 'none';
        document.getElementById('botHeart4').style.display = 'none';
        document.getElementById('botHeart3').style.display = 'none';
        document.getElementById('botHeart2').style.display = 'none';
        document.getElementById('botHeart1').style.display = 'none';
    }

    if (topStam === 5) {
        document.getElementById('topStam5').style.display = 'block';
        document.getElementById('topStam4').style.display = 'block';
        document.getElementById('topStam3').style.display = 'block';
        document.getElementById('topStam2').style.display = 'block';
        document.getElementById('topStam1').style.display = 'block';
    }


    else if (topStam >= 4) {
        document.getElementById('topStam5').style.display = 'none';
        document.getElementById('topStam4').style.display = 'block';
        document.getElementById('topStam3').style.display = 'block';
        document.getElementById('topStam2').style.display = 'block';
        document.getElementById('topStam1').style.display = 'block';
    }

    else if (topStam >= 3) {
        document.getElementById('topStam5').style.display = 'none';
        document.getElementById('topStam4').style.display = 'none';
        document.getElementById('topStam3').style.display = 'block';
        document.getElementById('topStam2').style.display = 'block';
        document.getElementById('topStam1').style.display = 'block';
    }

    else if (topStam >= 2) {
        document.getElementById('topStam5').style.display = 'none';
        document.getElementById('topStam4').style.display = 'none';
        document.getElementById('topStam3').style.display = 'none';
        document.getElementById('topStam2').style.display = 'block';
        document.getElementById('topStam1').style.display = 'block';
    }

    else if (topStam >= 1) {
        document.getElementById('topStam5').style.display = 'none';
        document.getElementById('topStam4').style.display = 'none';
        document.getElementById('topStam3').style.display = 'none';
        document.getElementById('topStam2').style.display = 'none';
        document.getElementById('topStam1').style.display = 'block';
    }

    else if (topStam >= 0) {
        document.getElementById('topStam5').style.display = 'none';
        document.getElementById('topStam4').style.display = 'none';
        document.getElementById('topStam3').style.display = 'none';
        document.getElementById('topStam2').style.display = 'none';
        document.getElementById('topStam1').style.display = 'none';
    }

    if (botStam === 5) {
        document.getElementById('botStam5').style.display = 'block';
        document.getElementById('botStam4').style.display = 'block';
        document.getElementById('botStam3').style.display = 'block';
        document.getElementById('botStam2').style.display = 'block';
        document.getElementById('botStam1').style.display = 'block';
    }

    else if (botStam >= 4) {
        document.getElementById('botStam5').style.display = 'none';
        document.getElementById('botStam4').style.display = 'block';
        document.getElementById('botStam3').style.display = 'block';
        document.getElementById('botStam2').style.display = 'block';
        document.getElementById('botStam1').style.display = 'block';
    }

    else if (botStam >= 3) {
        document.getElementById('botStam5').style.display = 'none';
        document.getElementById('botStam4').style.display = 'none';
        document.getElementById('botStam3').style.display = 'block';
        document.getElementById('botStam2').style.display = 'block';
        document.getElementById('botStam1').style.display = 'block';
    }

    else if (botStam >= 2) {
        document.getElementById('botStam5').style.display = 'none';
        document.getElementById('botStam4').style.display = 'none';
        document.getElementById('botStam3').style.display = 'none';
        document.getElementById('botStam2').style.display = 'block';
        document.getElementById('botStam1').style.display = 'block';
    }

    else if (botStam >= 1) {
        document.getElementById('botStam5').style.display = 'none';
        document.getElementById('botStam4').style.display = 'none';
        document.getElementById('botStam3').style.display = 'none';
        document.getElementById('botStam2').style.display = 'none';
        document.getElementById('botStam1').style.display = 'block';
    }

    else if (botStam >= 0) {
        document.getElementById('botStam5').style.display = 'none';
        document.getElementById('botStam4').style.display = 'none';
        document.getElementById('botStam3').style.display = 'none';
        document.getElementById('botStam2').style.display = 'none';
        document.getElementById('botStam1').style.display = 'none';
    }

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

        //launched attack
        botStam -= 1;
        if (topStatus === 'resting'){
        topHealth -= 1;
        topReplacePic();
        setTimeout(topPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
        setTimeout(topRest,500);}

        if (topStatus === 'stunned'){
            topHealth -= 2;
            //Critical Hit
            topReplacePic();
            setTimeout(topPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(topRest,500);}
        //if he's chilling, hurt him
        if (topStatus === 'blocking'){
            topStam--;
            //if he's blocking, hurt stamina
            if (topStam < 1) {
                topStun();
            }
            //and if this stamina taken away, stun him

        }

        if (topStatus === 'parrying') {
            botStun();
        }

        if (botStatus === 'attacking') {
            setTimeout(botRest, 500);//ATTACK RATE
        }

        if (topHealth <= 0) {
            setTimeout(topDied, 100);
            function topDied() {
                alert('top player died');
                topHealth = 10;
                botHealth = 10;
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

function botChargedUp (){
    if (botStatus === 'charged'){
        return;
    }
    if (botStam < 3) {
        return;
    }
    botStatus = 'charged';
    botReplacePic();
    setTimeout(botPic('http://www.etonline.com/news/2015/10/24187336/set_drake_hotling_bling_video-640.jpg'),100);
    //Charged up
    setTimeout(botPowerAttack, 500);
}

function botPowerAttack() {
    if (botStatus === 'attacking') {

    }
    if (botStatus === 'resting'){

    }
    else {
        botStatus = 'attacking';
        botReplacePic();
        setTimeout(botPic('http://mylifebook.com/blog/wp-content/uploads/2011/04/putting-the-power-behind-the-punch.jpg'),100);

        //launched attack
        botStam -= 3;
        if (topStatus === 'resting'){
            topHealth -= 3;
            topReplacePic();
            setTimeout(topPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(topRest,500);}

        if (topStatus === 'stunned'){
            topHealth -= 4;
            //Critical Hit
            topReplacePic();
            setTimeout(topPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(topRest,500);}


        //if he's chilling, hurt him
        if (topStatus === 'blocking'){
            topStam-=3;
            //if he's blocking, hurt stamina
            if (topStam < 1) {
                topStun();
            }
            //and if this stamina taken away, stun him

        }

        if (topStatus === 'parrying') {
            botStun();
        }

        if (botStatus === 'attacking') {
            setTimeout(botRest, 500);//ATTACK RATE
        }

        if (topHealth <= 0) {
            setTimeout(topDied, 100);
            function topDied() {
                alert('top player died');
                topHealth = 10;
                botHealth = 10;
                topStam = 5;
                botStam = 5;
            }
        }
    }
}

function botParry() {
    if (botStatus === 'parrying') {

    }
    if (botStam < 2) {

    }
     else if (botStatus === 'resting') {
        botStatus = 'parrying';
        botReplacePic();
        setTimeout(botPic('http://vignette1.wikia.nocookie.net/marvelcinematicuniverse/images/a/ac/CAShieldvsMjonir-TheAvengers.png/revision/latest?cb=20141020151051'), 100);
        setTimeout(botRest, 300);//REST RATE
        botStam -= 2;

    }
}

function botRest (){
    botStatus = 'resting';
    botReplacePic();
    botPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');
}

function botStun () {
    botStatus = 'stunned';
    botReplacePic();
    setTimeout(botPic('https://pbs.twimg.com/profile_images/378800000227860824/609c0452349405f0d1133c4d484f8a91_400x400.png'),100);
    setTimeout(botRest, 2000);
}
    document.onkeydown = checkKey;

function checkKey(e, b, u, te, tb, tu, p, tp, tc) {

    e = e || window.event;
    b = b || window.event;
    u = u || window.event;
    p = p || window.event;
    te = te || window.event;
    tb = tb || window.event;
    tu = tu || window.event;
    tp = tp || window.event;

    if (e.keyCode == '38') {
        // up arrow
        botAttack();
    }
    else if (b.keyCode == '40') {
        // down arrow
        botBlock();
    }

    else if (u.keyCode == '37') {
        botParry();
        // left arrow
    }
    else if (p.keyCode == '39') {
        botChargedUp();
        //right arrow
    }

    else if (te.keyCode == '87') {
    topAttack();
        //W
    }

    else if (tb.keyCode == '83') {
        topBlock();
        //S
    }

    else if (tu.keyCode == '65') {
        topParry();
        //A
    }

    else if (tp.keyCode == '68') {
        topChargedUp();
        //D
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

        //launched attack
        topStam -= 1;
        if (botStatus === 'resting'){
            botHealth -= 1;
            botReplacePic();
            setTimeout(botPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(botRest,500);}

        if (botStatus === 'stunned'){
            botHealth -= 2;
            //Critical Hit
            botReplacePic();
            setTimeout(botPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(botRest,500);}

        //if he's chilling, hurt him
        else if (botStatus === 'blocking'){
            botStam--;
            //if he's blocking, hurt stamina
            if (botStam < 1) {
                botStun();
            }
            //and if this stamina taken away, stun him

        }

        if (botStatus === 'parrying') {
            topStun();
        }

        if (topStatus === 'attacking') {
            setTimeout(topRest, 500);//ATTACK RATE
        }

        if (botHealth <= 0) {
            setTimeout(botDied, 100);
            function botDied() {
                alert('bot player died');
                topHealth = 10;
                botHealth = 10;
                topStam = 5;
                botStam = 5;
            }
        }
    }
}

function topChargedUp (){
    if (topStatus === 'charged'){
        return;
    }
    if (topStam < 3) {
        return;
    }
    topStatus = 'charged';
    topReplacePic();
    setTimeout(topPic('http://www.etonline.com/news/2015/10/24187336/set_drake_hotling_bling_video-640.jpg'),100);
    //Charged up
    setTimeout(topPowerAttack, 500);
}

function topPowerAttack() {
    if (topStatus === 'attacking') {

    }
    if (topStatus === 'resting'){

    }
    else {
        topStatus = 'attacking';
        topReplacePic();
        setTimeout(topPic('http://mylifebook.com/blog/wp-content/uploads/2011/04/putting-the-power-behind-the-punch.jpg'),100);

        //launched attack
        topStam -= 3;
        if (botStatus === 'resting'){
            botHealth -= 3;
            botReplacePic();
            setTimeout(botPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(botRest,500);}

        if (botStatus === 'stunned'){
            botHealth -= 4;
            //Critical Hit
            botReplacePic();
            setTimeout(botPic(' http://ranchopalosverdesdentist.com/wp-content/uploads/tmj-top.jpg'),100);
            setTimeout(botRest,500);}


        //if he's chilling, hurt him
        if (botStatus === 'blocking'){
            botStam-=3;
            //if he's blocking, hurt stamina
            if (botStam < 1) {
                botStun();
            }
            //and if this stamina taken away, stun him

        }

        if (botStatus === 'parrying') {
            topStun();
        }

        if (topStatus === 'attacking') {
            setTimeout(topRest, 500);//ATTACK RATE
        }

        if (botHealth <= 0) {
            setTimeout(botDied, 100);
            function botDied() {
                alert('bot player died');
                topHealth = 10;
                botHealth = 10;
                topStam = 5;
                botStam = 5;
            }
        }
    }
}

function topParry() {
    if (topStatus === 'parrying') {

    }
    if (topStam < 2) {

    }
    else if (topStatus === 'resting'){
        topStatus = 'parrying';
        topReplacePic();
        setTimeout(topPic('http://vignette1.wikia.nocookie.net/marvelcinematicuniverse/images/a/ac/CAShieldvsMjonir-TheAvengers.png/revision/latest?cb=20141020151051'), 100);
        setTimeout(topRest, 300);//REST RATE
        topStam -= 2;

    }
}

function topRest (){
    topStatus = 'resting';
    topReplacePic();
    topPic('http://delicioushealing.com/wp-content/uploads/2012/11/Young-man-Resting.jpg');
}

function topStun () {
    topStatus = 'stunned';
    topReplacePic();
    setTimeout(topPic('https://pbs.twimg.com/profile_images/378800000227860824/609c0452349405f0d1133c4d484f8a91_400x400.png'),100);
    setTimeout(topRest, 2000);
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
//Stunned// https://pbs.twimg.com/profile_images/378800000227860824/609c0452349405f0d1133c4d484f8a91_400x400.png
//Charged Up// http://www.etonline.com/news/2015/10/24187336/set_drake_hotling_bling_video-640.jpg

//Parry// http://vignette1.wikia.nocookie.net/marvelcinematicuniverse/images/a/ac/CAShieldvsMjonir-TheAvengers.png/revision/latest?cb=20141020151051

/*function checkStatus () {
    console.log(botStatus)
}
setInterval(checkStatus, 100)*/
