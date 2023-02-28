 //export tem como função disponibilizar as funções para deste módulo para outros módulos
 export function sum(num1, num2){
    return num1 + num2;
 }

 export function exp(base, exponent){
    return base ** exponent;
 }

 export function round(value, precision) {
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
 }

 console.log(sum(3, 4))
 console.log(exp(3, 4)) 
 console.log(round(2.3456, 3))