// document.createElement('p')

// appendChild(element)
// append(element) ->add in last
// prepend(element) ->add in the starting
// insertAdjacentElement(position (where), element) ->where and which element we wanna add
// insertAdjacentElement types: 
// 1. beforebegin -> Before the targetElement itself
// 2. afterbegin  -> Just inside the targetElement, before its first child
// 3. beforeend   -> Just inside the targetElement, after its last child
// 4. afterend    -> After the targetElement itself 


let newPara = document.createElement('p');

newPara.innerHTML = "Namaste Javascript";


let body = document.querySelector('body');

body.appendChild(newPara);

//Now i want to append this paragraph inside the box class
let box = document.querySelector('.box');

box.appendChild(newPara);

let btn = document.createElement('button');

btn.innerText = "Click here!";

newPara.appendChild(btn);

newPara.append(" added something") //Adding into the already existing paragraph


//insertAdjacentElement

let newBtn = document.createElement('button');

newBtn.innerText = "New Button!!!";

let para = document.querySelector('p');

para.insertAdjacentElement('beforebegin', newBtn);

para.insertAdjacentElement('beforeend', newBtn);

para.insertAdjacentElement('afterbegin', newBtn);

para.insertAdjacentElement('afterend', newBtn);