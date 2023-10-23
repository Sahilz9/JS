let todo = [];

let req = prompt("Enter the req ");

while (true) {
    if (req == "quit") {
        console.log("You quit");
        break;
    }
    else if (req == "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");
    }

    else if (req == "add") {
        let addItem = prompt("Enter the items to be add ");
        todo.push(addItem);
        console.log("Successfully Addedd");
    }

    else if (req == "delete") {
        let idx = prompt("Enter the item index for deleting ");
        todo.splice(idx, 1);
        console.log("Deleted");
    }
    else {
        console.log("Wront Request");
    }
    req = prompt("Enter the req ");
}