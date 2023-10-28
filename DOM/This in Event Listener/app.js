let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");
let btn = document.querySelector("button");

function changeColor() {
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);

//Instead of writiing addEventListener again n again make a function and callback that
// h3.addEventListener("click", function () {
//     this.style.color = "red";
// });
