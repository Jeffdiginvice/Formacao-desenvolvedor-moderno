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

// Variavei definidas dentro do escopo da função não vazam escopo

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
}
console.log(areaCirculo(3))

//Function hoisting: Funções no JS são movidas para cima pelo motor do JavaScript 

function teste(x) {
    console.log("TESTE = " + x)
}

teste(10)

// Funções podem ser passadas como argumento 

function triplo(num) {
    return num * 3;
}

function aplicar(f, num){
    const result = f(num);
    console.log("RESULTADO = " + result)
}

aplicar(triplo, 10)
aplicar(dobro1, 10)