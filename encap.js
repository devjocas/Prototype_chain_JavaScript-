// //SEM ENCAPSULAMENTO


// class Conta{
//     constructor(saldo){
//         this.saldo=saldo; //publico
//     }
// }

// const conta= new Conta(100)
// conta.saldo=-500
// console.log(conta)

//Com campos privados

// class ContaBancaria {
//   #saldo;

//   constructor(saldoInicial) {
//     if (saldoInicial < 0) {
//       throw new Error("O saldo inicial não pode ser negativo.");
//     }
//     this.#saldo = saldoInicial;
//   }

//   depositar(valor) {
//     if (valor <= 0) {
//       throw new Error("O valor deve ser positivo.");
//     }
//     this.#saldo += valor;
//   }

//   levantar(valor) {
//     if (valor > this.#saldo) {
//       throw new Error("Saldo insuficiente.");
//     }
//     this.#saldo -= valor;
//   }

//   get saldo() {
//     return this.#saldo;
//   }
// }

// const conta = new ContaBancaria(100);
// conta.depositar(50);

// console.log(conta.saldo); // 150
// // conta.#saldo = -1000; // SyntaxError

//Getters e setters

// class Usuario {
//   #email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(novoEmail) {
//     if (!novoEmail.includes("@")) {
//       throw new Error("E-mail inválido.");
//     }
//     this.#email = novoEmail;
//   }
// }

// const usuario = new Usuario("ana@exemplo.com");
// console.log(usuario.email); // ana@exemplo.com

// usuario.email = "novo@exemplo.com"; // passa pelo setter
// // usuario.email = "invalido"; // lança erro

// class User{
//     #nome;
//     constructor(nome){
//         this.#nome=nome
//     }
//     //usando encapsulamento com getter e setters
//     get dizerNome(){
//         return this.#nome
//     }
//     set dizerNome(novoNome){
//         if(!novoNome.startsWith("Dev")){
//             throw new Error("O nome deve começar com Dev.")
//         }
//         this.#nome=novoNome
//     }
// }

// const user= new User('DevJocas')
// user.dizerNome = "Ana"
// console.log(user.dizerNome)


// usando convenção underscore, metodo protegidos

class User{
    _nome;
    constructor(nome){
        this._nome=nome;
    }
    getNome(){
        return this._nome
    }
}

const user=new User("DevJocas")
console.log(user.getNome())
console.log(user._nome)

class Animal {
  constructor(name) {
    this._name = name; // protected by convention
  }

  _describe() {
    return `a creature named ${this._name}`;
  }
}

class Dog extends Animal {
  speak() {
    // subclass can use the protected member of its parent
    return `${this._name} says woof — it is ${this._describe()}`;
  }
}

console.log(new Dog("Rex").speak());



// Encapsulamento Baseado em Acessores: Boas Práticas
class User {
  #age;

  constructor(age) {
  this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if(newAge < 0) {
      console.log("Age cannot be negative.");
    } else {
      this.#age = newAge;
    }
  }
}

const user_1= new User(30);
console.log(user_1.age); 
user.age = -1; 
console.log(user.age);

