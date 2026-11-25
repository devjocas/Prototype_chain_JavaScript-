```md
# Introdução a Classes em JavaScript

Este repositório apresenta uma introdução prática ao uso de **classes em JavaScript**, incluindo construtores, métodos, propriedades, getters, setters, campos privados e herança.

Classes são uma forma mais organizada de criar objetos que compartilham dados e comportamentos. Elas funcionam como um “molde” ou “planta” para criar várias instâncias com a mesma estrutura. [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)

## O que é uma classe?

Uma classe define as características e ações que os objetos criados a partir dela terão.

Por exemplo, uma classe `Pessoa` pode ter:

- Nome
- Idade
- E-mail
- Ações como `apresentar()` ou `fazerAniversario()`

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 30);

pessoa1.apresentar();
pessoa2.apresentar();
```

Saída:

```text
Olá, meu nome é Ana e tenho 25 anos.
Olá, meu nome é Carlos e tenho 30 anos.
```

## O construtor

O método `constructor()` é executado automaticamente quando usamos `new` para criar um objeto.

Ele serve para receber os valores iniciais e atribuí-los às propriedades do objeto.

```js
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro = new Carro("Toyota", "Corolla", 2024);

console.log(carro.marca);  // Toyota
console.log(carro.modelo); // Corolla
console.log(carro.ano);    // 2024
```

## Métodos

Métodos são funções dentro de uma classe. Eles representam comportamentos ou ações que o objeto pode executar.

```js
class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }
}

const calculadora = new Calculadora();

console.log(calculadora.somar(10, 5));    // 15
console.log(calculadora.subtrair(10, 5)); // 5
```

## Getters e setters

Getters e setters permitem controlar como uma propriedade é lida e alterada.

- `get` é usado para **obter** o valor de uma propriedade.
- `set` é usado para **definir** ou alterar o valor de uma propriedade.
- Eles permitem adicionar validações antes de salvar um valor.

```js
class ContaBancaria {
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(valor) {
    if (valor < 0) {
      console.log("O saldo não pode ser negativo.");
      return;
    }

    this.#saldo = valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
      return;
    }

    this.#saldo += valor;
  }
}

const conta = new ContaBancaria("João");

conta.depositar(100);

console.log(conta.saldo); // 100

conta.saldo = -50; // O saldo não pode ser negativo.
```

Neste exemplo, `saldo` parece uma propriedade comum, mas na verdade passa por funções de acesso. Isso ajuda a proteger os dados e aplicar regras de negócio. [MDN — getters e setters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get)

## Campos privados

Em JavaScript, podemos usar `#` para criar campos privados. Eles só podem ser acessados dentro da própria classe.

```js
class Usuario {
  #senha;

  constructor(nome, senha) {
    this.nome = nome;
    this.#senha = senha;
  }

  verificarSenha(senha) {
    return this.#senha === senha;
  }
}

const usuario = new Usuario("Maria", "123456");

console.log(usuario.verificarSenha("123456")); // true
console.log(usuario.verificarSenha("errada")); // false
```

Campos privados ajudam a evitar que dados sensíveis sejam alterados diretamente de fora da classe. [MDN — campos privados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_elements)

## Herança

Herança permite criar uma nova classe baseada em outra. A classe filha pode reutilizar e ampliar as funcionalidades da classe pai.

Usamos `extends` para herdar e `super()` para chamar o construtor da classe pai.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("O animal fez um som.");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerSom() {
    console.log(`${this.nome} fez: Au au!`);
  }
}

const cachorro = new Cachorro("Rex");

cachorro.fazerSom(); // Rex fez: Au au!
```

## Métodos estáticos

Métodos estáticos pertencem à classe, e não a cada objeto criado a partir dela.

```js
class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(5, 3)); // 8
```

Não é necessário usar `new` para chamar um método estático.

## Exemplo prático

```js
class Produto {
  #preco;

  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  get preco() {
    return this.#preco;
  }

  set preco(valor) {
    if (valor < 0) {
      console.log("O preço não pode ser negativo.");
      return;
    }

    this.#preco = valor;
  }

  aplicarDesconto(percentual) {
    const desconto = (this.#preco * percentual) / 100;
    this.#preco -= desconto;
  }

  mostrarInformacoes() {
    console.log(`Produto: ${this.nome} | Preço: R$ ${this.#preco.toFixed(2)}`);
  }
}

const produto = new Produto("Teclado", 200);

produto.mostrarInformacoes();

produto.aplicarDesconto(10);

produto.mostrarInformacoes();
```

Saída:

```text
Produto: Teclado | Preço: R$ 200.00
Produto: Teclado | Preço: R$ 180.00
```

## Conceitos importantes

| Conceito | Descrição |
|---|---|
| `class` | Define uma classe |
| `constructor()` | Inicializa o objeto |
| `new` | Cria uma nova instância da classe |
| `this` | Refere-se ao objeto atual |
| Método | Função dentro de uma classe |
| Getter | Controla a leitura de uma propriedade |
| Setter | Controla a alteração de uma propriedade |
| `#campo` | Cria um campo privado |
| `extends` | Cria herança entre classes |
| `super()` | Chama o construtor da classe pai |
| `static` | Cria membros pertencentes à classe, e não à instância |

## Referências

- [MDN — Classes em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [MDN — Usando classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_classes)
- [MDN — Getters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get)
- [MDN — Setters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set)
- [MDN — Campos privados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_elements)
```

Criado por DevJocas,  os conceitos de getters, setters, campos privados, métodos estáticos e herança seguem a documentação oficial do MDN. [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide...)
