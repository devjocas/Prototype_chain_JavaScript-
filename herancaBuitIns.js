const numeros = [1, 2, 3];

console.log(numeros.map(n => n * 2)); // [2, 4, 6]

console.log(Object.getPrototypeOf(numeros) === Array.prototype);

console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);

//Estendendo built-ins

class ListaNumerada extends Array{
    primeiro(){
        return this[0];
    }
}
const itens = new ListaNumerada(10,20,30)
console.log(itens.primeiro())
console.log(itens.map(n=>n*2))

//Metodos retornan a subclass

class ListaNumerada extends Array {
  primeiro() {
    return this[0];
  }
}

const itens_1 = new ListaNumerada(1, 2, 3);
const filtrados_1 = itens.filter(n => n > 1);

console.log(filtrados_1 instanceof ListaNumerada); 
console.log(filtrados_1.primeiro());

//Controlando retorno com Symbols.species

class ListaNumerada extends Array {
  primeiro() {
    return this[0];
  }

  static get [Symbol.species]() {
    return Array;
  }
}

const itens_ = new ListaNumerada(1, 2, 3);
const filtrados = itens.filter(n => n > 1);

console.log(filtrados instanceof ListaNumerada); 
console.log(filtrados instanceof Array); 