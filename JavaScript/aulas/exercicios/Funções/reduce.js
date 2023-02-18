// Reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final cumulativo. * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).
function soma(x, y){
    return x + y;
}

function produto(x, y){
    return x * y;
}

const list1 = [1, 2, 3, 4];
const list2 = [];
const r1 = list1.reduce(soma, 0)//se quise pode colocar o elemento neutro que é zero!
const r2 = list2.reduce(soma, 0);
const r3 = list1.reduce(produto);// se passar o elemento neutro vai dá zero pq qualquer número vezes zero é zero 
console.log("REDUCE--------------")
console.log(r1);
console.log(r2);
console.log(r3);