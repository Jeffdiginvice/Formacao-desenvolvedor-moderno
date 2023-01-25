
const num = 14.5
console.log("Conversando entre number e string");

const str1 = num.toString()
console.log(`Tipo de ${str1} é ${typeof str1}`);

const str2 = num.toFixed(3);
console.log(str2);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} é ${typeof num1}`);

const num2 = parseInt("21");
console.log(`Tipo de ${num2} é ${typeof num2}`);

const num3 = parseFloat("21.34", 10)//na base 10 mas poderia ser na base exadecimal
console.log(`Tipo de ${num3} é ${typeof num3}`);