import { arrowLeft, borderColor, stepName, imgCheck, bar, progress, secuence } from "./functions.js";

function findBarReverse() {
    if (secuence == 3) {
        animationReverse()
    }
    if (progress == 2) {
        animationReverse()
    }
    if (progress == 1) {
        animationReverse()
    }
    if (progress == 0) {
        animationReverse()
    }
}


function animationReverse() {
    borderGreenReverse()
    crossToCheckReverse()
    showNameReverse()
    barAnimationReverse()
}

function borderGreenReverse() {
    borderColor[secuence].style.borderColor = "#D5D5D5";
}

function crossToCheckReverse() {
    imgCheck[secuence].src = "./img/x-gray.png";
}

function showNameReverse() {
    document.getElementsByClassName("name-step")[secuence].style.opacity = "0";
}

function barAnimationReverse() {
    bar[secuence].style.width = "0";
}

function pruebaReverse() {
    progress = 1+10
    findBarReverse();
    console.log(progress);
    
}

let arrowL = document.getElementById("arrow-left")

arrowL.addEventListener("click", pruebaReverse)
