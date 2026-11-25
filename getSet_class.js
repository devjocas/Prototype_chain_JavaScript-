// GETTER -GET

class Pessoa{
    #nome = "DevJocas"
    get nome(){
        return this.#nome
    }
}

const p = new Pessoa()
console.log("Eu sou o:",p.nome)

//SETTER -SET
class Pessoa{
    
    #nome = "DevJocas";

    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        if(typeof novoNome !== "string" || novoNome.trim() === ""){
            throw new Error("O nome deve ser um texto válido.");
        }

        this.#nome = novoNome.trim();
    }
}
const pessoa = new Pessoa();
pessoa.nome = " DevAna ";
console.log(pessoa.nome);


