 const str = "Maria Silva  "

console.log(`length: ${str.length}`);//MOSTRA O TAMANHO DA STRING
console.log(`indexOf: ${str.indexOf("i")}`);//MOSTRA A PRIMEIRA OCORRENCIA DA LETRA I i
console.log(`lastIndexOf: ${str.lastIndexOf()}`);//MOSTRA A ULTIMA OCORRENCIA | O ULTIMO I i
//console.log(`substring: ${data.substring(3, 5)}`);//MUITO IMPORTANTE PARA CORTAR PEDAÇO DA STRING

const data = "14/10/2021"

const mes = Number(data.substring(3, 5));
console.log(`substring: ${data.substring(3, 5)}`);

const valor = "200.99"
const novovalor = valor.toString().replace(".", ",")
console.log(novovalor)

console.log(`trim: ${str.trim()}`);//NOVO STRING SEM O ESPAÇO EM BRANCO NO FINAL   
