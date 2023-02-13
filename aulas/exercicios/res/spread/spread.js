//spread: array => transforma array em valores separados por virgula ,,,

const myNumbers = [2, 3, 10, 5];

const result1 = Math.max(myNumbers);
console.log(result1);

//forma correta para receber os valores do vetor 

const result2 = Math.max(...myNumbers);
console.log(result2);

// quanto se tem um objeto e quer transformar ele em valores separados por virgula

const item = {
    description: "Computador",
    price: 3000.0,
    quantity: 1
}

const objClone = {...item}// SPREAD permite vc clonar um objeto

const cloneItemPlus = { ...item, weight: 10}; //acresentei o peso ao objeto clonado
console.log(cloneItemPlus)