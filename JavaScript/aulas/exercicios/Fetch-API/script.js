//API é um nome generico para qualquer conjuto de métodos ou funções que são disponibilizadas para vc por algum sistema ou por alguma biblioteca 
const cep = '01001000';

const fetcheResult =  fetch(`https://viacep.com.br/ws/${cep}/json/`)/*quando se chama uma função FETCH o retorno dela é uma promise e o retorno dela é assicrona*/ //ESTOU CHAMANDO A FETCH API

 fetcheResult//O RESULTADO DA REQUISIÇÃO
     .then(response => {
          console.log("SUCESSO NO FETCH", response);//QUANDO RESOLVIDO IMPRIME NA TELA
          const json = response.json();//SO QUE AGORA CHAMA A FUNÇÃO JSON PARA PEGAR O CORPO DA RESPONSE NO FORMATO JSON
          json.then(result => {
            console.log("SUCESSO NO JSON", result);//QUANDO CHEGAR O RESULTADO, A PROMISE FOR RESOLVIDA EU IMPRIMO O JSON
          })
          .catch(error => {
            console.log("ERRO NO JSON", error)
          })
 })
 .catch(error => {
    console.log("ERRO NO FETCH", error)
 });

 console.log("A");
 console.log("B"); //COMPROVAR QUE É ASSICRONO