"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, classe, vida, forca) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.forca = forca;
    }
    // GET && SET NOME
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    // GET && SET CLASSE
    getClasse() {
        return this.classe;
    }
    setClasse(novaClasse) {
        this.classe = novaClasse;
    }
    // GET && SET VIDA
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
    }
    // GET && SET FORÇA
    getForca() {
        return this.forca;
    }
    setForca(novaForca) {
        this.forca = novaForca;
    }
    atacar(monstro) {
        monstro.dano(this);
        console.log(`Você atacou o monstro e ele te atacou de volta`);
    }
    dano(montro) {
        this.vida = this.vida - montro.getForca();
    }
    curar() {
        if (this.vida < 100) {
            return `Vida do Personagem ${this.vida = this.vida + 10}`;
        }
        else {
            console.log("Não pode curar mais");
        }
    }
}
exports.Personagem = Personagem;
