
function prueba() {
    console.log(bar[0]);
    
    // bar[0].style.width = "242.5rem";
    // arrowLeftActived()
    // setTimeout(borderGreen,350)
    // setTimeout(crossToCheck,400)
    // setTimeout(showName, 350)
}

function arrowLeftActived() {
    document.getElementById("arrow-left").style.background = "#695ACD";
    document.getElementById("arrow-left").classList.add("arrow");
}

function borderGreen() {
    document.getElementById("step-1").style.borderColor = "#008001";
}

function crossToCheck() {
    document.getElementById("step-1-img").src = "./img/check.png";
}

function showName() {
    document.getElementById("name-step-1").style.opacity = "1";
}

let bar = document.getElementsByClassName("green-bar")
let secuence;

function findBar() {
    if (bar[0].style.width != "242.5rem") {
        secuence = 0
    } else {
        alert("tengo 0 width")
    }
}

let crossLeft = document.getElementById("arrow-right")

crossLeft.addEventListener("click", prueba)