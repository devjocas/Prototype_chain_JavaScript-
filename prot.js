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

function Person(first,last, age, male, interests){
   this.first = first
   this.last = last
   this.age = age
   this.male = male
   this.interests = interests
}

const person_1 = new Person("Devjocas", "Jocas", 32, "Man", ["JavaScript", "Python", "Node.js"])
console.log(person_1)
const pessoa =  person_1
console.log("meu primeiro interese em estudar é: ", pessoa.interests[0])
console.log("Eu chamo-me: ",pessoa.first)
