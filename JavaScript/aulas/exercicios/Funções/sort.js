//short: ordena a coleção conforme a função de comparação informada como parâmetro | ordem alfabetica ou numerica 
function compararPorTamanho(s1, s2){
     return s1.length - s2.length;
}
const nomes = ['Maria', 'João', 'Anabela'];

console.log("SORT-------------");
const s1 = [...nomes].sort();//ordem alfabetica | criei um clone do vetor
console.log(s1);
console.log(nomes)
const s2 = [...nomes].sort(compararPorTamanho);
console.log(s2);
 
const s3 = [...nomes].sort((x , y) => x.length - y.length);
console.log(s3);

console.log(compararPorTamanho("Anabela", "João"));//valor 3 é positivo. isso significa que o primeiro paramêtro é maior que o segundo!
console.log(compararPorTamanho("João", "Anabela"));//varlor -3 é negativo. isso significa que o primeiro paramêtro é menor que o segundo!
console.log(compararPorTamanho("João", "João"));//Os dois valores são iguais por esse motivo o resultado retornado é zero!
console.log(s2);

