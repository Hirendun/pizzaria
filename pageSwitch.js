function switchToPizza() {
    show("pizza");
    hide("salads");
    hide("starter");
}

function switchToSalads() {
    show("salads");
    hide("pizza");
    hide("starter")
}

function switchToStarter() {
    show("starter");
    hide("salads");
    hide("pizza");
}

function hide(menu) {
    var display = document.getElementById(menu).style.display;
    document.getElementById(menu).style.display = 'none';
}

function show(menu) {
    var display = document.getElementById(menu).style.display;
    document.getElementById(menu).style.display = 'block';
}