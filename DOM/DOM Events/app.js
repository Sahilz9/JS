//Events are signals that something has occurred.(user imputs / actions)

//Mouse Pointer Events

//onclick -> when an element is clicked
//onmouseenter -> when mouse enters an element

let btn = document.querySelectorAll('button');

for (button of btn) {
    button.onclick = detailsBtn;
    button.onmouseenter = function () {
        console.log("You've entered a button");
    }
}

function detailsBtn() {
    alert("Details saved");
}