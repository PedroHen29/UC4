"use strict";
let nometurma = "25-1N";
let numeroAlunos = 20;
let nomes = ["nome1", "nome2", "nome3", "..."];
function mensagem() {
    console.log("Olá");
}
mensagem();
function calcula(a, b) {
    return a + b;
}
console.log(calcula(1, 1));
//Exercicios
//1
function escola(nomeAluno, idadeAluno, estaMatriculado) {
    console.log(`Aluno:"${nomeAluno}, ${idadeAluno}anos , ${estaMatriculado}`);
}
console.log(escola("Pedro", 15, true));
//2
let alunos = ["Pedro", "Leo", "Arthur", "Lucas", "Diego"];
function nome(alunos) {
    let lista = "Alunos:";
    for (let i = 0; i < alunos.length; i++) {
        lista += "\n" + alunos[i];
    }
    return lista;
}
console.log(nome(alunos));
//3
function saudacao(Pedro) {
    return `Olá, ${Pedro}! seja bem vindo(a) à turma`;
}
console.log(saudacao("Pedro"));
//4
function calculaMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let media = calculaMedia(10, 10, 10);
console.log("Nota final:" + media);
//5
function contarAlunos(turma) {
    console.log("Total de alunos: ", turma.length);
}
contarAlunos(["Pedro", "Henrique", "Leonardo"]);
