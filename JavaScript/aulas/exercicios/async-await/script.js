const cep = '01001000';

const fetcheResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);// a resposta do fetch é um promise pq é assicrona 

/*fetcheResult.then(value => {
    console.log(value);
})*/

// o async await vc deve encapsular em uma função
async function getJsonResponse(url){
    const resposta = await fetch(url);//resposta de uma requisição http
    const jsonBody = await resposta.json();//eu coloquei o await pq a função é assicrona q devolve o JSON
    return jsonBody;
} 

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resultado => {
        console.log(resultado);
    });
//se fizer uma chamada de função asscrona dentro de função sicrona no caso o console.log() ela não vai esperar a resposta chegar para executar. por isso a promise pedente(pending)

async function showCepDate(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);//getJsonResponse é assicrona, então eu preciso colocar o await
    console.log(json);
} 

showCepDate(cep);
console.log("A");