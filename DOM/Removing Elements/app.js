// //Removing Elements

// //removeChild(element)
// //remove(element)

// let body = document.querySelector('body');

// let btn = document.createElement('button');

// btn.innerText = "Click Here!!!";

// body.append(btn);

// body.removeChild(btn); //1st way to remove button
// btn.remove(); //2nd way to remove button 

let para = document.createElement('p');

para.innerText = "Hey I'm red!";

para.style.color = 'red';

let body = document.querySelector('body')
body.append(para);


let heading3 = document.createElement('h3');

heading3.innerText = "I'm a blue h3!";
heading3.style.color = "blue";

body.append(heading3);

let div = document.createElement('div');

div.style.backgroundColor = "pink";
div.classList.add("black");  

let heading1 = document.createElement('h1');
heading1.innerText = "I'm in a div"

let newPara = document.createElement('p');
newPara.innerText = "ME TOO!";
div.appendChild(heading1);
div.appendChild(newPara);

body.append(div);