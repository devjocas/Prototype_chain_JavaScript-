// //GETTER E SETTER SEM PROP PRIVADA

// class Pessoa {
//   constructor(nome) {
//     this._nome = nome;
//   }

//   get nome() {
//     return this._nome;
//   }

//   set nome(novoNome) {
//     if (typeof novoNome !== "string" || novoNome.trim() === "") {
//       console.log("Nome inválido.");
//       return;
//     }

//     this._nome = novoNome.trim();
//   }
// }

// const pessoa = new Pessoa("Ana");

// console.log(pessoa.nome); 

// pessoa.nome = "Carlos";

// console.log("Novo nome atribuido:",pessoa.nome); 

// Exemplos de produtos

// class Produto {
//   constructor(nome, preco) {
//     this._nome = nome;
//     this._preco = preco;
//   }

//   get preco() {
//     return this._preco;
//   }

//   set preco(valor) {
//     if (typeof valor !== "number" || valor < 0) {
//       console.log("O preço deve ser um número maior ou igual a zero.");
//       return;
//     }

//     this._preco = valor;
//   }
// }

// const produto = new Produto("Teclado", 200);

// console.log(produto.preco); 

// produto.preco = 150;
// console.log(produto.preco); 

// produto.preco = -10; 

// // GETTER CALCULADO

// class Retangulo {
//   constructor(largura, altura) {
//     this._largura = largura;
//     this._altura = altura;
//   }

//   get area() {
//     return this._largura * this._altura;
//   }
// }

// const retangulo = new Retangulo(10, 5);

// console.log(retangulo.area); 

// // GETTER SEM SETTER
// class Usuario {
//   constructor(nome) {
//     this._nome = nome;
//   }

//   get nome() {
//     return this._nome;
//   }
// }

// const usuario = new Usuario("Maria");

// console.log(usuario.nome); 

// usuario.nome = "João"; 

