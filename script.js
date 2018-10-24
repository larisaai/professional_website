"use strict"

//changing text on the leading page
let text = ["With interest in web develpement mostly in animations and javascript", "Biggest dream of the moment is to be a front end developer ", "Student of multimedia design and communication"];
let counter = 0;
let elem = document.getElementById("changeText");
let inst = setInterval(change, 3000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;

    }
}

// navigation menu for small devices
document.querySelector(".hamburguer").addEventListener("click", function () {
    document.querySelector(".full-menu").classList.toggle("active");
    document.querySelector(".hamburguer").classList.toggle("close-hamburguer");
});


// Modal
let modal = document.getElementById('mymodal1');
let details = document.getElementById("contribution1");
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
details.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Second modal
let modal2 = document.getElementById('mymodal2');
let details2 = document.getElementById("contribution2");
let span2 = document.getElementsByClassName("close2")[0];

details2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// third modal
let modal3 = document.getElementById('mymodal3');
let details3 = document.getElementById("contribution3");
let span3 = document.getElementsByClassName("close3")[0];

details3.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
// forth modal
let modal4 = document.getElementById('mymodal4');
let details4 = document.getElementById("work1");
let span4 = document.getElementsByClassName("close4")[0];

details4.onclick = function () {
    modal4.style.display = "block";
}
span4.onclick = function () {
    modal4.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
// fifth modal
let modal5 = document.getElementById('mymodal5');
let details5 = document.getElementById("contribution5");
let span5 = document.getElementsByClassName("close5")[0];

details4.onclick = function () {
    modal5.style.display = "block";
}
span5.onclick = function () {
    modal5.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

// sixth modal
let modal6 = document.getElementById('mymodal6');
let details6 = document.getElementById("work2");
let span6 = document.getElementsByClassName("close6")[0];

details6.onclick = function () {
    modal6.style.display = "block";
}
span6.onclick = function () {
    modal6.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}