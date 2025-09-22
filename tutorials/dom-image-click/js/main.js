let imageZero = document.querySelector("#image-0");
let imageOne = document.querySelector("#image-1");
let imageTwo = document.querySelector("#image-2");
let imageThree = document.querySelector("#image-3");

imageZero.addEventListener("click", function () {
    imageOne.style.visibility = "visible";
    // alert("bark bark bark");
})

imageOne.addEventListener("click", function () {
    imageTwo.style.visibility = "visible";
})

imageTwo.addEventListener("click", function () {
    imageThree.style.visibility = "visible";
})

imageThree.addEventListener("click", function () {
    alert("Fin.");
})