export class Estoque<T> {
    itens:T[] = []

    adicionar(item: T):void{
        this.itens.push(item)
    }
    listar(): T[]{
        return this.itens
    }
    reemover(indice:number){
        return this.itens.splice(indice, 1)
    }
    buscar(condicao: (item: T) => boolean):T[]{
        
    }
}