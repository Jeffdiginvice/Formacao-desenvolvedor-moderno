const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML);//vai mostrar o HTML que está dentro do elemento que eu selecionei 
console.log(item1.outerHTML);//Para escrever todo o HTML dele 

const items = document.querySelectorAll("li");

console.log(items);  
    
const card1 = document.querySelector(".card");
console.log(card1);

const paragrafo = document.createElement("p");//estou criando o elemento P do HTML
paragrafo.innerHTML = "Descrição";//coloquei o conteúdo descrição dentro do elemento P criado
card1.appendChild(paragrafo);

card1.classList.add("super-border")//classList devolve a lista de classes

const cards = document.querySelectorAll(".card");
const cardsName = document.getElementsByClassName("card");
console.log(cardsName)

console.log(cards);

console.log(cards[0]);

Array.from(cards).map(item => {//transformei em ARRAY
    console.log(item);
});
//OU
[...cards].map(item => {
    console.log(item.innerHTML);
})

