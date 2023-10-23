const max = prompt("Enter the max number:- ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number:- ");

while (true) {

    if (guess == "quit") {
        console.log("Game end!");
        break;
    }
    if (guess == random) {
        console.log("Congrats! you're correct", random);
        break;
    }
    else if (guess < random) {
        guess = prompt("Hint! your number is too small. Please enter again:- ");
    }
    else {
        guess = prompt("Hint! your number is too small. Please enter again:- ");
    }
}