let para = document.querySelector('p');

//To print the property 
console.dir(para);

console.log(para.innerText); //Shows the visible text contained in a node

console.log(para.innerHTML);//Shows the full markup(all tags like a, p, img, etc)

console.log(para.textContent);//Shows all the full text


para.innerText = "Paragraph Changed";

para.innerHTML = "Paragraph <b>Changed</b>"

//also can write this using another way 

let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;