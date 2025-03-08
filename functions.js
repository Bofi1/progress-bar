
function prueba() {
    if (animacionEnCurso == true) { // Verifica si no hay animación en curso
        animacionEnCurso = true; // Establece la bandera
        findBar();
        progress++;
    }


    if (animacionEnCurso == false) { // Verifica si no hay animación en curso
        animacionEnCurso = true; // Establece la bandera
        findBar();
        progress++;
    }
}

function animation() {
    setTimeout(borderGreen,400)
    setTimeout(crossToCheck,400)
    setTimeout(showName,400)
    barAnimation()

    bar[secuence].addEventListener('transitionend', animacionFinalizada); //
}

function animacionFinalizada() { //
    bar[secuence].removeEventListener('transitionend', animacionFinalizada);
    animacionEnCurso = false; // Restablece la bandera cuando la animación termina
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
let progress = 0;
let secuence = 0;
let animacionEnCurso = false

function barAnimation() {
    bar[secuence].style.width = "242.5rem";
}

function findBar() {
    console.log(progress);
    if (progress == 0) {
        animation()
    }
    if (progress == 1) {
        secuence++
        animation()
    }
    if (progress == 2) {
        secuence++
        animation()
    }
    if (progress == 3) {
        secuence++
        animation()
    }
}



let crossLeft = document.getElementById("arrow-right")

crossLeft.addEventListener("click", prueba)