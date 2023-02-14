//Funções construtoras instanciam objetos com uma estrutura pré-definida

const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}
console.log(p1)

const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity =  quantity;
}

Product.prototype.total = function() {
    return this.price * this. quantity;
}

Product.prototype.add = function(amount){
    if(this.quantity >= amount){
        this.quantity = this.quantity + amount;
    }
}

Product.prototype.remove = function(amount){
    this.quantity -= remove;
}

const p2 = new Product("Monitor", 800.0, 10);

console.log(`Valor: ${p2.total()}`);
console.log(p2);

const p3 = new Product("Mouse", 50.0, 4);
console.log(`Valor: ${p3.total()}`);
