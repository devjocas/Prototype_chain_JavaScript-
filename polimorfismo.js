class Animal{
    constructor(nome){
        this.nome=nome;
    }
    speak(){
        return `${this.nome} fazem  um som.`
    }
}

class Dog extends Animal{
    speak(){
        return `O ${this.nome} ladra.`
    }
}

class Cat extends Animal{
    speak(){
        return `O ${this.nome} mia.`
    }
}

const animal = new Animal("Alguns animais")
const dog = new Dog("Rex")
const cat = new Cat("Mica")

console.log(animal.speak())
console.log(dog.speak())
console.log(cat.speak())
