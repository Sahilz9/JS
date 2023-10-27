let p = document.querySelector("p");

p.addEventListener("click", function () {
    alert("Don't copy the content");
});


let div = document.querySelector("#box");

div.addEventListener("mouseenter", function () {
    console.log("Mouse Hovered");
    alert("Hey! your mouse hovered inside the box");
});