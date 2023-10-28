//Change Eevent
//The change event occurs when the value of an element has been changed (only works
//on <input>, <textarea> and <select> elements)

//Input event
//The input event fires when the value of an <input>, <select>, or<textarea> element
//has been changed

// Arrow key will not trigger the input event but characters key will
//Generally Input event is used for smalls events

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#username");

// user.addEventListener("change", function () {
//     console.log("change trigger");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function () {
//     console.log("input trigger");
//     console.log("final value = ", this.value);
// });


let input = document.querySelector("input");

let para = document.querySelector("p");

input.addEventListener("input", function () {
    console.log(this.value);
    para.innerText = input.value;
});



