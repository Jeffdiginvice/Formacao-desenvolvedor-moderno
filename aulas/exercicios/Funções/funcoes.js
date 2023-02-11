function soma1(n1, n2){
    return n1 + n2;
} 
console.log(soma1(3, 5));

const soma2 = function(n1, n2) {
    return n1 + n2;
}
console.log(soma2(4, 2));

const soma3 = (n1, n2) => {
    return n1 + n2;
}
console.log(soma3(9, 12));

const soma4 = n1 => {
    return n1;
}
console.log(soma4(9));

const soma5 = (n1, n2) => n1 + n2; 
console.log(soma5(7, 7));

const dobro1 = function(n1){
    return n1 * 2;
}
console.log(dobro1(10));

const dobro2 = n1 => n1 *2;//com um argumento o parenteses é opcional!!!
console.log(dobro2(20));

//Função que não tem um retorno definido, por padrão ela retorna underfined 

function mostrarpreco(preco){
    console.log("preço = " + preco);
}
console.log(mostrarpreco(200))