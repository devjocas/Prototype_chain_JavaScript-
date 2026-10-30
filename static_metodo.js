// class Carro{
//     static marcaCarro="Lamborghini";
//     static velocidade = "300km/h"
// }

// console.log("Tenho um carro de marca: ",Carro.marcaCarro)
// console.log("O meu carro de marca "+ Carro.marcaCarro + " Tem uma velocidade de "+ Carro.velocidade) 

// class App{
//     static nome="DevJocasApp";
//     static descricao=`0 meu aplicativo ${this.nome} esta em versao de teste`
// }
// console.log(App.descricao)

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