// Returns the Elements as an HTML collection or empty collection (if not found)

//Changing first paragraph with indexing 

let para = document.getElementsByTagName("p");

para[0].innerHTML = "Paragraph Changed";



//Changing only first paragraph without indexing 

// Find and change a specific paragraph by class
// let paragraphs = document.getElementsByTagName("p");

// for (let i = 0; i < paragraphs.length; i++) {
//     if (paragraphs[i].classList.contains("para1")) {
//         paragraphs[i].innerHTML = "Paragraph Changed";
// break; // If you want to change only the first matching paragraph, exit the loop.
// }
// }
