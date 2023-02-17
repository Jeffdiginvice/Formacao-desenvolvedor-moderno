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
//instância de objeto
const p1 = new Product("Monitor", 800.0, 10);
//instância de objeto
const p2 = new Product("Mouse", 50.4, 4); 