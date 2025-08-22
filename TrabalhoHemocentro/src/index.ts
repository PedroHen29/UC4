import * as readline from 'readline-sync';
let opcao = ""
do{
    console.log(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair

    `)
    opcao = readline.question("Escolha uma opção: ")

    switch(opcao){
        case "1":
            
        case "2":

        break
        case "3":
        
        break
        case "4":

        break
        case "5":
            console.log("Saindo. Até mais...")
        break
    }


}while(opcao !== "5")