import {sum, round} from './numbers.js';//Importação usando desestruturação de objetos
import Product from './product.js';//O nome da importação de uma exportação padrão não precisa ser o msm, neste caso Product! eu poderia colocar por exemplo - "Prod"

console.log(sum(3, 4));

console.log(round(3.2345, 2));
const obj = new Product("Computador", 800.0, 10);//Eu deveria mudar para Prod na instancia tbm

console.log(obj); 