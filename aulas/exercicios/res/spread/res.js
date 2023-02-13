//REST: valores passados com virgula => array | são convertidos para um array!

function sum1(...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum1(2, 3, 10, 5);
console.log(result1);

//Sem o REST eu preciso passar os argumentos da função com [] exemplo: sum2([2, 3, 10, 5]); e não  sum1(2, 3, 10, 5);!
function sum2(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

const result2 = sum2([2, 3, 10, 5]);
console.log(result2);

const result3 = Math.max(2, 5, 9, 3);//Recebe os valores como sendo um vetor de numero e retorna o valor maior do vetor
console.log(result3)