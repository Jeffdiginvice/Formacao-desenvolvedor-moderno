//REST: valores passados com virgula => array | são convertidos para um array!

function sum(...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);
console.log(result1);