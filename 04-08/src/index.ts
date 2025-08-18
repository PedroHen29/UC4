//Exercicios
//1
function escola(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void {
     console.log(`Aluno:"${nomeAluno}, ${idadeAluno}anos , ${estaMatriculado}`)
}
console.log(escola("Pedro", 15, true))

//2
let alunos:string[] = ["Pedro", "Leo", "Arthur", "Lucas", "Diego"]

function nome(alunos:string[]):string {
   let lista:string = "Alunos:"
   for(let i = 0; i < alunos.length; i++){
    lista += "\n" + alunos[i]
   }
   return lista
}
console.log(nome(alunos))

//3
function saudacao(Pedro:string):string {
    return `Olá, ${Pedro}! seja bem vindo(a) à turma`

}
console.log(saudacao("Pedro"))

//4
function calculaMedia(num1:number, num2:number, num3:number):number {
    return (num1+num2+num3) / 3
}
let media = calculaMedia(10,10,10)
console.log("Nota final:" + media)
//5
 
function contarAlunos(turma:string[]):void {
    console.log("Total de alunos: ", turma.length)
}
contarAlunos(["Pedro", "Henrique", "Leonardo"])