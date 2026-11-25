// //Metodos estaticos de classes

// class Matematica{
//     static somar(a,b){
//         return a+b
//     }
// }
// console.log(Matematica.somar(5,7))

// class Calculadora{
//     static pi = 3.14;
//     static areaCirculo(raio){
//         return this.pi*raio*raio
//     }
// }
// console.log(Calculadora.areaCirculo(2))
// console.log(Calculadora.pi)//Acessar o vlaor da prop estatica


class Matematica {
  static somar(a, b) {
    return a + b;
  }

  static criarId() {
    return Math.random().toString(36).slice(2);
  }
}

console.log(Matematica.somar(2, 3)); // 5
console.log(Matematica.criarId());

const m = new Matematica();
// m.somar(2, 3); // erro: não é um método de instância

// Metodo estatico com fabrica 

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  static criarConvidado(nome) {
    // return new Usuario(nome, "convidado@exemplo.com");
    //outra forma de criar usuario
    return new Usuario("Ana", "ana@gamil.com")
  }
}

// const convidado = Usuario.criarConvidado("Ana");
const convidado = Usuario.criarConvidado();

console.log(convidado.email); // "convidado@exemplo.com"

//static metodos
class Produto {
  static imposto = 0.14; // compartilhado por todos

  constructor(nome, preco) {
    this.nome = nome;   // exclusivo de cada produto
    this.preco = preco; // exclusivo de cada produto
  }

  precoComImposto() {
    return this.preco * (1 + Produto.imposto);
  }

  static validarPreco(preco) {
    return preco >= 0;
  }
}

const p = new Produto("Teclado", 100);
console.log(p.precoComImposto()); // 114
console.log(Produto.validarPreco(100)); //true

// Acessar estáticos dentro da classe

class App {
  static ambiente = "producao";

  static mostrarAmbiente() {
    return `Ambiente: ${this.ambiente}`;
  }
}

console.log(App.mostrarAmbiente()); // "Ambiente: producao"