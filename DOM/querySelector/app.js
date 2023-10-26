//Allow us to use any CSS selector 

console.dir(document.querySelector('h1'));

console.dir(document.querySelector('#para1'));

console.dir(document.querySelector('.para2'));

//querySelector only select the first thing first 

//In para1 there is also a unordered List(ul) is present now i wanna access it 
//here i'll use this way to access it 


console.dir(document.querySelector('#para1 ul'));

//So if i wanna access all the selector which are present in a specific selector
//i'll use `querySelectorAll`

console.dir(document.querySelectorAll('p'));

//To select all the paragraph which are present inside the div or in (id="para1")
//Gonna use this method


console.dir(document.querySelectorAll('#para1 p'));