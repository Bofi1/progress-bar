
function prueba() {
    findBar()
}

function animation() {
    borderGreen()
    crossToCheck()
    showName()
}

function borderGreen() {
    borderColor[secuence].style.borderColor = "#008001";
}

function crossToCheck() {
    imgCheck[secuence].src = "./img/check.png";
}

function showName() {
    document.getElementsByClassName("name-step")[secuence].style.opacity = "1";
}

let borderColor = document.getElementsByClassName("step")
let stepName = document.getElementsByClassName("name-step")
let imgCheck = document.getElementsByClassName("step-img")
let bar = document.getElementsByClassName("green-bar")
let secuence;

function barAnimation() {
    bar[secuence].style.width = "242.5rem";
}

function findBar() {

}



let crossLeft = document.getElementById("arrow-right")

crossLeft.addEventListener("click", prueba)