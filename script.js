var text = ["Student of multimedia design and communication", "With interest in web develpement mostly in animations and javascript", "Biggest dream of the moment is to be a front end developer "];
var counter = 0;
var elem = document.getElementById("changeText");
var elm = document.getElementById("changeText2")
var inst = setInterval(change, 2500);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;

    }
}

function change() {
    elm.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;

    }
}