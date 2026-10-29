class Animal {
   constructor(nome){
    this.nome=nome
  }
  falar(){
    console.log(`${this.nome} faz um som`)
  }
}

//Criando instancia da classe

const animal = new Animal("Rex")
animal.falar()


// Herança com extends

class Cachorro extends Animal{
    latir(){
        console.log(`${this.nome} late:Au au!`)
    }
}
const cachorro = new Cachorro("Bidu")
cachorro.falar() // herdado de Animal
cachorro.latir() // metodo prorio

//Usando super()

class Gato extends Animal{
    constructor(nome, cor){
        super(nome) //
        this.cor=cor;
    }
    miar(){
        console.log(`${this.nome} ${this.cor} faz: Miau!`)
    }
}

const gato = new Gato("Mimi", "cinza")
gato.falar();
gato.miar()

//Subscrevendo metodos

class Passaro extends Animal{
    falar(){
        console.log(`${this.nome} canta.`)
    }
}
const passaro = new Passaro("Piú")
passaro.falar()

//Manter o comportamento com super.metodo()

class Papagaio extends Animal{
    falar(){
        super.falar() //Executa Animal.falar()
        console.log(`${this.nome} repete palavras.`)
    }
}
const papagaio = new Papagaio("Loro")
papagaio.falar()