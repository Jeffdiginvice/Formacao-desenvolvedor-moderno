const obj1 = {
    "name": "Computador",
    "price": "50.9",
    "due-date": "2025-04-15"
}
//DENTRO DO JAVASCRIPT PODE SER TANDO COM ASPAS QUANTO SEM
const obj2 = {
    name: "Computador",
    price: "50.9",
    "due-date": "2025-04-15"//SE TEM ALGUM CARACTERE ESPECIAL NA VARIAVEL, TEM QUE COLOCAR ASPAS "". EXEMPLO "due-date"
}

const obj3 = {
    id: 51,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quatity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quatity: 2
        }
    ],
    cliente: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj3.date);
console.log(obj3.cliente);
console.log(obj3.cliente.name);

const txt = `{"name": "Computador", "price": 50.9, "due-date": 2025-04-15}`;

const obj = JSON.parse(txt);//CONVERTI STRING EM OBJETO

console.log(txt);
console.log(obj);

const text = JSON.stringify(obj); 