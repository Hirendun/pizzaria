function switchToPizza() {
    // pusheen
    show("pusheenPizza");
    hide("pusheenSalads");
    hide("pusheenStarter")

    // menu
    show("pizza");
    hide("salads");
    hide("starter");
}

function switchToSalads() {
    // pusheen
    show("pusheenSalads");
    hide("pusheenPizza");
    hide("pusheenStarter");

    // menu
    show("salads");
    hide("pizza");
    hide("starter")
}

function switchToStarter() {
    // pusheen
    show("pusheenStarter");
    hide("pusheenPizza");
    hide("pusheenSalads")

    // menu
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