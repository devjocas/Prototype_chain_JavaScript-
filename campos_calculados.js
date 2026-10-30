//Nota:No campo calculados o valor da expressão é avaliado e usado como nome da propriedade.
// const chave="email";
// const usuario={
//     nome:"Ana",
//     [chave]:"ana@gmail.com"
// }
// console.log(usuario.email)

// Usando classes

const chave="email"

class Usuario{
    [chave]="";
}
const user = new Usuario();
user.email = "devjocas@gmail.com"
console.log("endereço do engenheiro:", user.email)

// Com expressoes

const campo = "preco";
const moeda = "AOA";

const produto = {
  nome: "Teclado",
  [campo + "_" + moeda]: 25000
};

console.log(produto.preco_AOA); 

// template literals
const id = 42;

const resposta = {
  [`usuario_${id}`]: "Ana"
};

console.log(resposta.usuario_42); 

//classes

const metodo = "cumprimentar";

class Pessoa {
  [metodo]() {
    return "Olá!";
  }
}

const p = new Pessoa();
console.log(p.cumprimentar()); // "Olá!"