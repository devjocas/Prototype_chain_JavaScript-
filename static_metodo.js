class Carro{
    static marcaCarro="Lamborghini";
    static velocidade = "300km/h"
}

console.log("Tenho um carro de marca: ",Carro.marcaCarro)
console.log("O meu carro de marca "+ Carro.marcaCarro + " Tem uma velocidade de "+ Carro.velocidade) 

class App{
    static nome="DevJocasApp";
    static descricao=`0 meu aplicativo ${this.nome} esta em versao de teste`
}
console.log(App.descricao)

class Contador {
  static total = 0;

  static incrementar() {
    this.total++;
  }

  mostrarTotal() {
    return Contador.total;
  }
}

Contador.incrementar();
Contador.incrementar();


console.log(Contador.total);

//Herança e campos estaticos

class Animal {
  static categoria = "animal";
}

class Cachorro extends Animal {}

console.log(Cachorro.categoria); 

class chamarNome{
    static nomePessoa = "DevJocas";
    static dizerNome=function(nome){
        return `Estou chamando o Eng. ${this.nomePessoa}`
    }
}
console.log(chamarNome.dizerNome())
// console.log(chamarNome.nomePessoa)


// ------------------------------Exemplo----------------
class Engenheiro{
    static nomeEng = "DevOps";
    static linguagemProg = ["JavaScript", "Python", "Node.js", "Linux", "Docker"]

    constructor(nome,prog){
        this.nome=nome
        this.prog=prog

    }
}

const skill= new Engenheiro("DevJocas",  Engenheiro.linguagemProg)
console.log("Eu sou: ",skill.nome)
console.log("As minhas principais habilidades são: ",skill.prog+"." + "\nComecei a nova saga do " + skill.prog[3] + ".")