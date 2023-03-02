export default//export default explicitamente informa que está apenas expostando o elemento product | pode ser uma função/classe etc
class Product {
    //propriedades
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //métodos vão para o prototype 
    total(){
        return this.price * this.quantity;
    }

    add(amount){
        this.quantity += amount;
    }

    remove(){
        if(this.quantity += amount){
            this.quantity -= amount;
        }
    }

    label(){
        return `Dados: ${this.name} ${this.price.toFixed(2)}`;
    }
}