class Pessoa{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
    apresentar(){
        return `Chamo-me ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Estudante extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade)
        this.curso=curso
    }
    apresentar(){
        return `${super.apresentar()} \nEstudo ${this.curso}.`
    }
}
const estudante=new Estudante("DevJocas", 25, "Engenharia Informatica")
console.log(estudante.apresentar())


//ERROS DE REFERENCEERROR
class Produto {
  constructor(sku) {
    this.sku = sku;
  }
}

class ProdutoDigital extends Produto {
  constructor(sku, tamanhoMb) {
    //nao se usao super depois do this , usa se acima ou antes do this para evitar erro
    this.tamanhoMb = tamanhoMb;
    super(sku);
  }
}

console.log(new ProdutoDigital('EBK-03', 12));

//Cadeia impressa

class Produto {
  etiqueta() {
    return this.sku;
  }
}
class ProdutoDigital extends Produto {}

const ebook = new ProdutoDigital();
ebook.sku = 'EBK-03';

let atual = ebook;
const cadeia = [];
while (atual !== null) {
  cadeia.push(atual.constructor?.name ?? '(sem constructor)');
  atual = Object.getPrototypeOf(atual);
}
console.log(cadeia.join(' -> '));

console.log(Object.getPrototypeOf(ebook) === ProdutoDigital.prototype);
console.log(Object.getPrototypeOf(ProdutoDigital.prototype) === Produto.prototype);
console.log(Object.getPrototypeOf(ProdutoDigital) === Produto);
console.log(Object.hasOwn(ebook, 'etiqueta'), Object.hasOwn(Produto.prototype, 'etiqueta'));