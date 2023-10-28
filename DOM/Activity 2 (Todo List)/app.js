let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});


//This method is working for all the lists
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


//This method not working for all the lsit
// let delbtns = document.querySelectorAll(".delete");
// for (deletebtn of delbtns) {
//     deletebtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }

//if i want old evenListener apply on new events so here we'll gonna use "Event Delegation"
