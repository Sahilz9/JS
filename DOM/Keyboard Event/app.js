let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    // console.log(event.key);
    console.log(event.code);

    if (event.code == "KeyU") {
        console.log("move up");
    }
    else if (event.code == "KeyD") {
        console.log("move down");
    }
    else if (event.code == "KeyL") {
        console.log("move left");
    }
    else if (event.code == "KeyR") {
        console.log("move right");
    }
});

//Using Keyboard event we can track which key user have pressed
