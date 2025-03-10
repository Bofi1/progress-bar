let arrowLeft = document.getElementById("arrow-left")
let borderColor = document.getElementsByClassName("step")
let stepName = document.getElementsByClassName("name-step")
let imgCheck = document.getElementsByClassName("step-img")
let bar = document.getElementsByClassName("green-bar")
let arrowR = document.getElementById("arrow-right")
let arrowL = document.getElementById("arrow-left")
let progress = 0;
let secuence = -1;




// -------- ASCENDENTE --------


    // --- funciones principales
function prueba() {
    progress++
    secuence++
    findBar();
    arrowLeftActived()
}

function animation() {
    borderGreen()
    crossToCheck()
    showName()
    barAnimation()
}

function findBar() {
    console.log("findBar es igual a " + secuence);
    

    if (secuence == 0) {
        animation()
    }
    if (secuence == 1) {
        animation()
    }
    if (secuence == 2) {
        animation()
    }
    if (secuence == 3) {
        animation()
    }

    if (secuence > 3) {
        secuence = 3
    }
}
    // --- /funciones principales




    // llamar a la funcion ascendente
arrowR.addEventListener("click", prueba)




    // --- funcones secundarias para la accion ascendente
function arrowLeftActived() {
    arrowLeft.classList.add("arrow")
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

function barAnimation() {
    bar[secuence].style.width = "242.5rem";
}
    // --- /funcones secundarias para la accion ascendente


// -------- /ASCENDENTE --------






// -------- DECRECIENTE --------


    // --- funciones principales
function pruebaReverse() {
    findBarReverse();  
    secuence = secuence - 1   
}

function animationReverse() {
    borderGreenReverse()
    crossToCheckReverse()
    showNameReverse()
    barAnimationReverse()
}

function findBarReverse() {
    console.log("la secuencia para el findBarReverse es " + secuence);
    

    if (secuence == 3) {       
        animationReverse()
    }
    if (secuence == 2) {
        animationReverse()
    }
    if (secuence == 1) {
        animationReverse()
    }
    if (secuence == 0) {
        animationReverse()
        arrowLeft.classList.remove("arrow")
    }

    if (secuence < 0) {
        secuence = 0
    }
}
// --- /funciones principales




    // llamar a la funcion decreciente
arrowL.addEventListener("click", pruebaReverse)




    // --- funcones secundarias para la accion ascendente
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
    // --- /funcones secundarias para la accion ascendente




// -------- /DECRECIENTE --------

