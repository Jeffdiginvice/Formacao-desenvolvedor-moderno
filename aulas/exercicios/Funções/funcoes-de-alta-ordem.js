const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ['MARIA', 'JOAO', 'ANABELA'];
//map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados.

function dobro(x){
    return x * 2;
}

function triplo(x){
    return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2)//Função lambida/ função anonima

console.log("MAP ------------")
console.log(m1);
console.log(m2);
console.log(m3);

//Filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção que satisfazem um predicado

function par(x){ 
    return x % 2 == 0;
}
console.log(par(9))

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 == 1);//IMPAR
const f3 = list1.filter(x => x > 2)
console.log("FILTER -------------")
console.log(f1);
console.log(f2);
console.log(f3);