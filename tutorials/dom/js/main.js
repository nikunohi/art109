
console.log("Hello!");

let pageTitle = document.querySelector("#page-title");
let pageBody = document.querySelector("body");


setTimeout(function () {
    pageTitle.style.color = "pink";
    //console.log("timeout worked!");
}, 3000)

// Click event on header changes background color

document.querySelector("header").onclick = function () {
    //console.log("clicked header!");
    pageBody.style.backgroundColor = "black";
}

