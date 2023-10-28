let div = document.querySelector("div");

let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div called");
});


ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul called");
});

for (li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li called");
    });
}

//When clicking on the list partition, it triggers events for multiple elements, including the div, ul, and li. 
//To make it affect only a specific element, you need to control event propagation

//Nested elements should have it seperate eventListener so that it'll not affect its neighbour 
