var game = document.querySelectorAll(".game");
var parentXO = document.getElementById("parent-xo");
var counter = true;
for (var i = 0; i < game.length; i++) {
    game[i].addEventListener("click", function (e) {
        if (e.path[0].innerHTML === "") {
            addXOrO(e, counter);
        }
    });
}
function addXOrO(event, bool) {
    if (event.path.length === 6 && bool === true) {
        event.path[0].innerHTML = "<img src=\"photos/x.png\" alt=\"x\">";
        event.path[0].classList.add("x");
        counter = !counter;
    }
    else if (event.path.length === 6 && bool === false) {
        event.path[0].innerHTML = "<img src=\"photos/o.png\" alt=\"o\">";
        event.path[0].classList.add("o");
        counter = !counter;
    }
    checkWinner();
}
function checkWinner() {
    var str;
    str = rows();
    if (str === "x" || str === "o") {
        alert(str + " win!!");
    }
    str = line();
    if (str === "x" || str === "o") {
        alert(str + " win!!");
    }
    str = topRight();
    if (str === "x" || str === "o") {
        alert(str + " win!!");
    }
    str = topLeft();
    if (str === "x" || str === "o") {
        alert(str + " win!!");
    }
}
function rows() {
    for (var i = 0; i < 7; i = i + 3) {
        if (parentXO.children[i].classList[2] ===
            parentXO.children[i + 1].classList[2] &&
            parentXO.children[i].classList[2] ===
                parentXO.children[i + 2].classList[2] &&
            parentXO.children[i].classList[2] !== undefined) {
            return parentXO.children[i].classList[2];
        }
    }
    //   return line();
}
function line() {
    for (var i = 0; i < 4; i++) {
        if (parentXO.children[i].classList[2] ===
            parentXO.children[i + 3].classList[2] &&
            parentXO.children[i].classList[2] ===
                parentXO.children[i + 6].classList[2] &&
            parentXO.children[i].classList[2] !== undefined) {
            return parentXO.children[i].classList[2];
        }
    }
    //   return topLeft();
}
function topLeft() {
    if (parentXO.children[0].classList[2] === parentXO.children[4].classList[2] &&
        parentXO.children[0].classList[2] === parentXO.children[8].classList[2] &&
        parentXO.children[0].classList[2] !== undefined) {
        return parentXO.children[0].classList[2];
    }
    //    return topRight();
}
function topRight() {
    if (parentXO.children[2].classList[2] === parentXO.children[4].classList[2] &&
        parentXO.children[2].classList[2] === parentXO.children[6].classList[2] &&
        parentXO.children[2].classList[2] !== undefined) {
        return parentXO.children[2].classList[2];
    }
}