const animal = {
    respirar(){
        return "Respirando...."
    }
};

const cachorro = Object.create(animal)
cachorro.latir = function(){
    return "Au au!"
};

console.log(cachorro.latir())
console.log(cachorro.respirar())

//Herança em varios niveis

const serVivo = {
  respirar() {
    return "Respirando...";
  }
};

const animal_1 = Object.create(serVivo);
animal.mover = function () {
  return "Movendo...";
};

const cachorro = Object.create(animal_1);
cachorro.latir = function () {
  return "Au au!";
};

console.log(cachorro.latir());    
console.log(cachorro.mover());    
console.log(cachorro.respirar()); 

// Sombrear propriedades

const animal = {
  som: "Som genérico",
  falar() {
    return this.som;
  }
};

const gato = Object.create(animal);
gato.som = "Miau";

console.log(gato.falar()); 
console.log(animal.falar()); 

// Herança com construtores

function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.respirar = function () {
  return `${this.nome} está respirando.`;
};

function Cachorro(nome) {
  Animal.call(this, nome);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  return `${this.nome} faz au au!`;
};

const rex = new Cachorro("Rex");

console.log(rex.respirar()); 
console.log(rex.latir());    