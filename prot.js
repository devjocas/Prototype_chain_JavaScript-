const animal = {
    respirar(){
        return "Estou respirando"
    }
}
const cachorro = Object.create(animal)
cachorro.latir = function(){
    return "Au au!"
}
cachorro.nome = "Bob"

console.log(cachorro.latir()) //Au au! -Existe no proprio objecto
console.log(cachorro.respirar()) // Estou respirando -Herdado de animal
console.log("O nome do meu cachorro chama-se: ", cachorro.nome) // Bob -Existe no objecto
console.log(cachorro.comer) // undefined  - nao existe em nenhuma parte da cadeia