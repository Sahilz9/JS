// Event Listener -> used to execute multiple function 
//onclick used to execute one time one function for multiple execution we use addEventListener

//addEventListener

//element.addEventListener(event, callback);

let btn = document.querySelectorAll('button');

for (btns of btn) {
    // button.onclick = detailsBtn;
    // button.onmouseenter = function () {
    //     console.log("You've entered a button");
    // }

    // button.addEventListener("click", detailsBtn);
    // button.addEventListener("click", congrats);
    btns.addEventListener("dblclick", function () {
        console.log("Double Click");
    });

}

function detailsBtn() {
    alert("Details saved");
}

function congrats() {
    alert("Congrats!");
}