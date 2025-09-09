import readlineSync from "readline-sync";
console.log("Hello TypeScript!");
let opcao = ""
do {

opcao = Number(readlineSync.question("Qual operação você deseja realizar? "))
switch(opcao){

}
}
while(opcao != 5)