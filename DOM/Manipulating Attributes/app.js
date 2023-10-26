//obj.getAttribute(attr) -> it gives the specific value of an Attribute(id, img, style ,class)
//obj.setAttribute(attr, val) -> it change the value of an Attribute

//Both are also called getter & setter to get & set the value

let img = document.querySelector('img');

img.getAttribute('id');

//output:- mainImg

//Changing the id 
img.setAttribute('id', 'randomImg');

//Also can change the source of an attribute(img)

img.setAttribute('src', '../../Images/industry-support-icon.svg');
