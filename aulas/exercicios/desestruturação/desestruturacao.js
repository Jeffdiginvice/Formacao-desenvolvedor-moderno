const obj = {
    id: 53,
    date: "2021-10-20",
    item: [
        {
            description: "Celular",
            price: 1499.9,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ], 
    cliente: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj)

const {id, cliente} = obj;
console.log(id);
console.log(cliente);

function subTotal(item){
    return item.price * item.quantity;
    //return obj.item.price * item.quantity;
}

console.log(subTotal(obj.item[1]));

function subTotal1({price, quantity}){
    return price * quantity;
    //return obj.item.price * item.quantity;
}
console.log(subTotal1(obj.item[1]));

function total({ item}){
    let soma = 0;
    for(let i = 0; i<item.length; i++){
        soma = soma + subTotal(item[i]);
    }
    return soma;
}

console.log(total(obj));

const [item1, item2] = obj.item;
console.log(item1);
console.log(item2);