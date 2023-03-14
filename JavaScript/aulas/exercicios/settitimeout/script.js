//É uma função que executa uma função após um dado tempo em milissegundos.
function dizerOla() {
    console.log("Olá");
}


setTimeout(dizerOla, 2000)//Quando se passa uma função como argumento, se passa apenas a funação sem abre e fecha () | por ser uma espera Assíncrona, os valores A e B foram impressos primeiro!

function dizerBomDia(nome){
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("João");
        setTimeout(() => {
            dizerBomDia("Ana");
        }, 2000);
    }, 2000);
}, 2000);

console.log("A");
console.log("B");

//NÃO FAÇA ISSO

function esperar(ms) {
    const fim = Date.now() + ms;

    while(Date.now() < fim) {

    }
}


console.log("A");
esperar(2000);
console.log("B");