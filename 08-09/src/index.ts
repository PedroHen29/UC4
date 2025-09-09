import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";

console.log("Hello TypeScript!");
 function pegarPrimeito<T>(item: T[]):T{
    return item[0]


}
const numeros = [1,2,3]
const palavras = ["a", "b", "c"]

console.log(pegarPrimeito(numeros)) // Retorna 1 
console.log(pegarPrimeito(palavras)) // Retorna "a"

// Restringindo os tipos que aceitamos
/*
    <T extends {length: number }>
    Indica que a função aceita apenas algo que contenha a proprietade length
*/
function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
  mostraTamanho("Oi");        // ✅ funciona (string tem length)
  mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length) */
  //mostraTamanho(123);         // ❌ erro (number não tem length) 
  console.log("✅")

   // <T extends string | number>
   // Só aceita algo que pode ser de um tipo OU de outro, nesse caso, string ou number
   // Se for qualquer outro tipo, não aceita
function mostraValor<T extends string | number>(valor: T): T {
    return valor;
  }
  
  mostraValor("Olá");  // ✅ string permitido
  mostraValor(123);    // ✅ number permitido
 // mostraValor(true);   // ❌ boolean não é aceito
  

 interface TemNome {
    nome: string;
  }
  
  function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
  }
  
  mostraNome({ nome: "Ana" });             // ✅ ok
  mostraNome({ nome: "João", idade: 20 }); // ✅ ok
 // mostraNome({ idade: 20 });               // ❌ erro, não tem nome
  


// 🎒 Estoque Genérico:

const estoqueRoupas = new Estoque<Roupa>()
estoqueRoupas.adicionar(new Roupa("Camiseta Preta", "P"))
estoqueRoupas.adicionar(new Roupa("Calça Jeans", "GG"))
estoqueRoupas.adicionar(new Roupa("Boné Vermelho", "único"))

const estoqueLivros = new Estoque<Livro>()
estoqueLivros.adicionar(new Livro("O Senhor dos Aneis", "J.R.R Tolkien"))
estoqueLivros.adicionar(new Livro("Harry Potter", "J.K Rolling"))