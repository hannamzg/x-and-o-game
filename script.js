var game = document.querySelectorAll(".game");
var parentXO = document.getElementById("parent-xo");
var counter = true;


for (var i = 0; i < game.length; i++) {
    game[i].addEventListener("click", function (e) {
        let eventPath = e.path || e.composedPath();
        if (eventPath[0].innerHTML === "") {
            addXOrO(e, counter);
        }
    });
}

function addXOrO(e, bool) {
    let eventPath = e.path || e.composedPath();
    if (eventPath.length === 6 && bool === true) {
        eventPath[0].innerHTML = "<img src=\"photos/x.png\" alt=\"x\">";
        eventPath[0].classList.add("x");
        counter = !counter;
    }
    else if (eventPath.length === 6 && bool === false) {
        eventPath[0].innerHTML = "<img src=\"photos/o.png\" alt=\"o\">";
        eventPath[0].classList.add("o");
        counter = !counter;
    }
    checkWinner();
}

function checkWinner() {
    var str;
    str = topLeft();
    if (str === "x" || str === "o") {
        alert(str + " win!!");
    }
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
    /*  if (parentXO.children[0].classList[2] === parentXO.children[4].classList[2] &&
        parentXO.children[0].classList[2] === parentXO.children[8].classList[2] ) {
        return parentXO.children[0].classList[2];
    }  */
    let place1 = parentXO.children[0].classList[2];
    let place5 = parentXO.children[4].classList[2];
    console.log(place1);
    console.log(place5);
     if (parentXO.children[0].classList[2]===parentXO.children[4].classList[2]
        &&parentXO.children[0].classList[2]===parentXO.children[8].classList[2]&&
        parentXO.children[0].classList[2]!== undefined) {
         return parentXO.children[0].classList[2]
    } 
    
    //    return topRight();
}

function topRight() {
    if (parentXO.children[2].classList[2] === parentXO.children[4].classList[2] &&
        parentXO.children[2].classList[2] === parentXO.children[6].classList[2] ) {
        return parentXO.children[2].classList[2];
    }
   
}



let arr3 = [13, 6, 8, 11, 2];
let arr2 = [1, 4, 5];
arr1 = arr3.concat(arr2);

let a = arr1.length;

let finalArr = [];

function check1() {
  for (let index = 0; index < a; index++) {
    let sss = [arr1[0], 0]; // [ערך,המיקום של הערך]
    for (let i = 0; i < a; i++) {
      if (sss[0] >= arr1[i]) {
        sss[0] = arr1[i];
        sss[1] = i;
      }
    }
    finalArr.push(sss[0]);
    arr1.splice(sss[1], 1);
  }
}
/* check1(); */


















/* 

function ss(){
    for (const key of arr1) {
        for (const so of arr2) {
            if(key >= so){
            finalArr.push(so)
            }
        }
        finalArr.push(key)
     }   
}   

ss()

function removeDuplicates(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log( removeDuplicates(finalArr)); */