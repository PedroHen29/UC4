// A classe funciona como um 'molde' para im tipo de dado
// "export" permite que importemos depois esta classe em qualquer lugar do projeto
// A palavra "class" indica que isto é uma classe
// Depois de "class" colocamos o nome da classe que deve ser EXATAMENTE igual ao nome do arquivo
export class Cachorro {
// Atributos (coisas que objetos desta classe TÊM)
    nome:string;
    raca:string;
    idade:number;

// Construtor da classe (função/método que é chamado AUTOMATICAMENTE quando crio um objeto a partir desta classe). É nele que eu defino os valores que este objeto vai ter para seus atributos.
    constructor(nomeCachorro:string, racaCachorro:string, idadeCachorro:number){
        // O atributo "nome" desta classe vai receber como valor o que o usuario digitar (nomeCachorro)
        this.nome = nomeCachorro
        this.raca = racaCachorro
        this.idade = idadeCachorro
    }


// Métodos (coisas que objetos desta classe FAZEM)
// Não usamos a palavra "function"
    latir():void{
        console.log(`O cahorro de nome ${this.nome} está latindo. `)
    }

    correr():void{
        console.log(`O cahorro de raca ${this.raca} está correndo. `)
    }
}