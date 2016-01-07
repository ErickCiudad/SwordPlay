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

