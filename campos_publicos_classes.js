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


//Usando campo estatico

class Config{
    static ambiente = "produção";
    static versao ="1.0.0"
}
console.log(Config.ambiente)
console.log(Config.versao)

//Exemplode uso

class Usuario {
  static TIPO_ADMIN = "admin";
  static TIPO_CLIENTE = "cliente";

  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

const admin = new Usuario("Ana", Usuario.TIPO_ADMIN);
console.log(admin.tipo); // "admin"