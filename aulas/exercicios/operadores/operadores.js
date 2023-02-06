 //Operadores Aritméticos
 console.log("Operadores artiméticos");
 console.log(`3 + 4 = ${3 + 4}`);//ADIÇÃO
 console.log(`3 - 4 = ${3 - 4}`);//SUBTRAÇÃO
 console.log(`3 * 4 = ${3 * 4}`);//MULTIPLICAÇÃO
 console.log(`19 / 3 = ${19 / 3}`);//DIVISÃO
 console.log(`19 % 3 = ${19 % 5}`);//MODE | RESTO DA DIVISÃO
 console.log(`3 ** 4 = ${3 ** 4}`);//ExPONECIAÇÃO 

 //Operadores Comparativos
 console.log("Operadores Comparativos"); 
 console.log(`10 > 5 = ${10 > 5}`);//maior que
 console.log(`10 < 5 = ${10 < 5}`);//menor que
 console.log(`10 >= 5 = ${10 >= 5}`);//maior igual
 console.log(`10 <= 5 = ${10 <= 5}`);//menor igual

 console.log("Operadores comparativos de igualdade")
 console.log(3 == 3);// 3 é igual a 3?
 console.log("3" == 3);// 3 é igual a 3? mesmo avendo uma string
 console.log(`"" == false: ${'' == false}`);
 console.log(`"" === false: ${'' === false}`);
 console.log(`"17" == 17: ${'17' == 17}`);
 console.log(`"17" === 17: ${'17' === 17}`);
 const x = "Maria";
 const y = "Maria";
 const a = new String("Maria");//embora tenham o mesmo conteúdo, são objetos diferentes 
 const b = new String("Maria");//embora tenham o mesmo conteúdo, são objetos diferentes 
 console.log(` const x = "Maria"`);
 console.log(`const y = "Maria`);
 console.log(`const a = new String("Maria")`);
 console.log(`const b = new String("Maria")`);
 console.log(`x === y: ${x === y}`);
 console.log(`a === b: ${a === b}`);
 console.log(`typeof x: ${typeof x}`);
 console.log(`typeof a: ${typeof a}`);//função construtora | objeto
  
 /**
  * Converte para um tipo em comum, depois compara:
  * ==
  * !=
  * 
  * Compara levando em conta também o tipo
  * ===
  * !==
  * 
  * object: compara referência
  * string: number, boolean: compara valor
  */

 console.log("Operadores lógicos")
 console.log(`"(10 > 5) && (10 > 20))" ${(10 > 5) && (10 > 20)}`);
 console.log(`"(10 > 5) && (10 < 20))" ${(10 > 5) && (10 < 20)}`);
 console.log(`"(10 > 5) || (10 > 20))" ${(10 > 5) || (10 > 20)}`);
 console.log(`"(10 > 5) || (10 < 20))" ${(10 > 5) || (10 < 20)}`);
 console.log(`"!(10 > 5):" ${!(10 > 5)}`);

 /**
  * && (E)
  * || (OU)
  * ! (NÃO)
  */