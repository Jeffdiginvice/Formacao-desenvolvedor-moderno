//Promise recebe uma função f como argumento.
function f(g, h){// A promise faz mais sentivo em função assincrona 

    setTimeout(() => {
        if(10 <  0){
            g("P");
        } else {
            h("Q ");
        }
    }, 3000);

}

function executarSeRejeitar(valor) {
    console.log("Rejeitada com o valor " + valor);
}

const minhaPromise = new Promise(f); //O método then de uma promise recebe como argumento uma função, e executa esta função passando o valor P para ela, quando a promise for resolvida.

minhaPromise
    .then(valor => {
        console.log("Rejeitada com o valor " + valor);
    }).catch(valor => {
        console.log("Rejeitada com o valor " + valor);
    })
console.log(minhaPromise);