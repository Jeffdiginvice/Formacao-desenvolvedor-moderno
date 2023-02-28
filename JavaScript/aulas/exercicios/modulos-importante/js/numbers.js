 //export tem como função disponibilizar as funções para deste módulo para outros módulos
function sum(num1, num2){
    return num1 + num2;
 }

function exp(base, exponent){
    return base ** exponent;
 }

function round(value, precision) {
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
 }

 console.log(sum(3, 4))
 console.log(exp(3, 4)) 
 console.log(round(2.3456, 3))

 export { sum , round};// exportações explicitas ---------