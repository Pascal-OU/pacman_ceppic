// Déclaration des Variables
let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground")
let hammertime = new Hammer(playground);
hammertime.on('pan', function(ev) {
	console.log(ev);
});
let posX = 0 , posY = 0;
console.dir(playground);
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;
console.dir(pacman);
console.log(posX,posY);
// Déclaration des Fonctions
function movePacman(direction) {
    // condition qui définit les limites de déplacement  de pacman
    // posX > 0 => "gauche"
    // posY > 0 => "haut"
    // posX > widthPlayground - 200 => "droite"
    // posY > widthPlayground - 200 => "bas"
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
            case "droite":
            if (posX < widthPlayground - 200) {
                    posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPlayground - 150) {
                posY += 50 
            }
            break;
        default:
            break;
    }
    pacman.style.transform = "translate("+posX+"px, "+posY+"px)";
};
/* window pour javascript represente "le navigateur" */
 window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 37: //gauche
        case 81: //Q
            
            // posX = posX - 50;
            /* if (posX > 0) {
                posX -= 50;
            }
            
            pacman.style.transform = "translate("+posX+"px, "+posY+"px)"; */
            movePacman("gauche")
            break;
        case 38: //haut
        case 90: //Z
            // posY = posY - 50;
            /* if (posY > 0) {
                posY -= 50;
            }
            
            pacman.style.transform = "translate("+posX+"px, "+posY+"px)"; */
            movePacman("haut")
            break;
        case 39: //droite
        case 68: //D
            // posX = posX + 50;
            /* if (posX < widthPlayground - 200) {
                posX += 50;
            }
            
            pacman.style.transform = "translate("+posX+"px, "+posY+"px)"; */
            movePacman("droite")
            break;
        case 40: //bas
        case 83: //S
            // posY = posY + 50;
            /* if (posY < heightPlayground - 150) {
                posY += 50 
            }
            
            pacman.style.transform = "translate("+posX+"px, "+posY+"px)"; */
            movePacman("bas")
            break;
        default:
            break;
    }
});
// GESTION Tactile
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
hammertime.on("swipeleft swiperight swipeup swipedown", function(ev) {
    console.dir(ev.type);
    switch (ev.type) {
        case "swipeleft": //gauche
            movePacman("gauche")
            break;
        case "swipeup": //haut 
            movePacman("haut")
            break;
        case "swiperight": //droite 
            movePacman("droite")
            break;
        case "swipedown": //bas 
            movePacman("bas")
            break;
    
        default:
            break;
    }
});  