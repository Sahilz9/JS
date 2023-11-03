//style property
//obj.style


// I can change the individual tag or attribute style 

let heading = document.querySelector('h1');

heading.style.color = 'orange';
heading.style.backgroundColor = 'green';

// Using "cssText" we can use multiple CSS properties
headging.style.cssText = 'color: green: background-color: orange; font-size: 4rem;';

let box = document.querySelectorAll("#list a");

for (let i = 0; i < box.length; i++) {
    box[i].style.color = 'red';
}

//Can access all the 'Inline CSS' but not the 'External CSS'
