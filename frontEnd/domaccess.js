/*
dom access
DOM

*/

const div1 = document-getElementById("div1");
const div2 = document-querySelector("#div1");
console.log("div1");
console.log("div2");
const listofitems = document.getElementsByClassName("fruits");
const querylistofitems = document.querySelector(".fruits");
const querylistofallitems = document.querySelectorAll(".fruits");

console.log(listofitems);
console.log(querylistofitems);
console.log(querylistofallitems);

for (let i = 0; 1 < querylistofallitems.length; 1++) {
    console.log(querylistofallitems[i]):
}