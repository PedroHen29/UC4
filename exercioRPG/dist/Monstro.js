"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
class Monstro {
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }
    // SET && GET NOME
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    // SET && GET VIDA
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
    }
    // SET && GET FORÇA
    getForca() {
        return this.forca;
    }
    setForca(novaForca) {
        this.forca = novaForca;
    }
    atacar(personagem) {
        personagem.dano(this);
    }
    dano(personagem) {
        this.vida = this.vida - personagem.getForca();
    }
}
exports.Monstro = Monstro;
