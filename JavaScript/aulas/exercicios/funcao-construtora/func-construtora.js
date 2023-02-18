//Funções construtoras instanciam objetos com uma estrutura pré-definida
//Boa prática: defina propriedades dentro do construtor, e métodos no prototype 
const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}
console.log(p1)
//função construtora
const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity =  quantity;
    //se pode colocar uma função dentro do construtor | mesmo que se repita o nome da função, a prioridade é da função interna do objeto produto/product +
    Product.prototype.label = function(){
        return `Dados: (Função interna) ${this.name}, ${this.price.toFixed(2)}`
    }
}

//Métodos
Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
        this.quantity = this.quantity + amount; 
}

Product.prototype.remove = function(amount){
    if (this.quantity >= amount){
        this.quantity -= amount;
    }
}

Product.prototype.label = function(){
    return `Dados: ${this.name}, ${this.price.toFixed(2)}`
}
//-----------------

const p2 = new Product("Monitor", 800.0, 10);

console.log(`Valor: ${p2.total()}`);
console.log(p2.label());
console.log(p2.add(3));
console.log(p2.remove(5));
console.log(p2);
console.log(p2.label());

const p3 = new Product("Mouse", 50.0, 4);

console.log(`Valor: ${p3.total()}`);

