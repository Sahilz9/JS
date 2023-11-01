let jsonData = '{"fact":"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws.","length":163}';

let validate = JSON.parse(jsonData);
console.log(validate.fact);



let jsToJson = JSON.stringify(jsonData);
