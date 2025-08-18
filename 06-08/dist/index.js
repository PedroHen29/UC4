"use strict";
/*for(let volta:number = 0; volta <= 10; volta++) {
console.log(`O ciclista deu ${volta} voltas`)
}

let volta:number = 0
while(volta <= 10) {
console.log(`O ciclista deu ${volta} voltas`)
volta++
}


const numeros:number[] = [10,20,30,40,50]
for(let i:number = 0; i < numeros.length; i++){
    console.log("numero:" + numeros[i])
}
*/
const numeros = [10, 20, 30, 40, 50];
for (let numero of numeros) {
    console.log("Numero:" + numero);
}
// EXERCICO SOBRE LOOPS
//1
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
for (let i = 0; i < sociedade.length; i++) {
    if (i == 0 || i == 1 || i == 5 || i == 6) {
        console.log("Hobbit encontrado: " + sociedade[i]);
    }
}
//2
const jedi = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];
for (const personagem of jedi) {
    if (personagem.jedi === true) {
        console.log(`são jedi: ` + personagem.nome);
    }
}
//3
const personagens = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};
for (const cla in personagens) {
    console.log(`${cla} pertecence ao clã ${personagens[cla]}`);
}
//4
const sla = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];
// 5
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0;
while (contador < pokemons.length) {
    if (pokemons[contador] === "Mewtwo") {
        console.log("Pokemon lendario encontrado, Mewtwo");
        break;
    }
    console.log(`Capturado ${pokemons[contador]}`);
    contador++;
}
