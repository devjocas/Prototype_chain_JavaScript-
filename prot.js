const animal = {
    respirar(){
        return "Estou respirando"
    }
}
const cachorro = Object.create(animal)
cachorro.latir = function(){
    return "Au au!"
}
cachorro.raca = function(tipo_raca){
   return `A cor do meu cachorro é de de raça:${tipo_raca} `
}
cachorro.nome = "Bob"

console.log(cachorro.latir()) //Au au! -Existe no proprio objecto
console.log(cachorro.respirar()) // Estou respirando -Herdado de animal
console.log("O nome do meu cachorro chama-se: ", cachorro.nome) // Bob -Existe no objecto
console.log(cachorro.comer) // undefined  - nao existe em nenhuma parte da cadeia
console.log(cachorro.dono)
console.log(cachorro.raca("Pastor Alemão"))


//Criando funcao construtora e definir instancia da funcao 

function Person(first,last, age, gender, interests){
   this.first = first
   this.last = last
   this.age = age
   this.gender = gender
   this.interests = interests
}

const person_1 = new Person("Devjocas", "Jocas", 32, "Male", ["JavaScript", "Python", "Node.js"])
console.log(person_1)
const pessoa =  person_1
console.log("meu primeiro interese em estudar é: ", pessoa.interests[0])
console.log("Eu chamo-me: ",pessoa.first)
pessoa.first = 'DevEliseu'

//Modificando o prototype
Person.prototype.farewell = function(){
    console.log('O nome alterado com sucesso: ' + this.first )
}
person_1.farewell()

//Construtor com prop de definição

function Pessoa(nome){
    this.nome=nome
}

Pessoa.prototype.saudar=function(){
    console.log(`Ola! meu nome é ${this.nome}`)
}
const devJocas = new Pessoa("DevJocas")
devJocas.saudar()