//exemplo completo de calculo de area

class Retangulo {
  #largura;
  #altura;

  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  get largura() {
    return this.#largura;
  }

  set largura(valor) {
    if (valor <= 0) {
      throw new Error("A largura deve ser maior que zero.");
    }

    this.#largura = valor;
  }

  get altura() {
    return this.#altura;
  }

  set altura(valor) {
    if (valor <= 0) {
      throw new Error("A altura deve ser maior que zero.");
    }

    this.#altura = valor;
  }

  get area() {
    return this.#largura * this.#altura;
  }
}

const r = new Retangulo(10, 5);

console.log("Valor da largura:",r.largura); 
console.log("Calculo da area:",r.area);    

//Atribuindo valor na largura
r.largura = 20;
console.log(r.area);    