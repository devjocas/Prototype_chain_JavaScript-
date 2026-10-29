class ContaBancaria {
  #saldo = 0; // campo privado

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  verSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria("DevJocas", 100);

conta.depositar(150);
console.log(conta.verSaldo()); 

console.log(conta.titular);    // DevJocas (público)
// console.log(conta.#saldo);     // SyntaxError


//Controlar e alterar valores

class Conta {
  #saldo = 0;

  constructor(saldoInicial) {
    this.#saldo = Math.max(0, saldoInicial);
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      throw new Error("Saldo insuficiente.");
    }
    this.#saldo -= valor;
  }

  get saldo() {
    return this.#saldo;
  }
}

const conta_1 = new Conta(100);
conta_1.sacar(30);
console.log(conta_1.saldo); // 70

//Metodos privados

class Pedido {
  #itens = [];

  adicionar(produto, preco) {
    this.#itens.push({ produto, preco });
    this.#validar();
  }

  #validar() {
    if (this.#itens.length > 10) {
      throw new Error("Máximo de 10 itens por pedido.");
    }
  }

  total() {
    return this.#itens.reduce((soma, item) => soma + item.preco, 0);
  }
}