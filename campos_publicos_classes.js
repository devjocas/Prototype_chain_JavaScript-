//Cmapo publicos de classes

class Pessoa{
    nome = "Sem nome"; //campo publico com valor inicial
    idade;

    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}

const p = new Pessoa("Ana", 25)
console.log("Eu sou a: ",p.nome)
p.idade=27 //pode ser alterado fora da classe
console.log(p)