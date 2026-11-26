//Metodo de instancia

class Conta{
    constructor(titular, saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    };
    //criar metodos da classe

    depositar(valor){
        this.saldo += valor;
        return this; //Para encadear chamada 
    }

    sacar(valor){
        if(valor > this.saldo){
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
        return this;
    }
}

//Ccriando instancias
const conta = new Conta("DevJocas", 100)
conta.depositar(50).sacar(20)
console.log("Valor do salod atual:",conta.saldo +"Kz.")

//Metodos estaticos

class Moeda{
    static converter(valor, taxa){
        return valor * taxa;
    };

    static criaKwanza(valorKz){
        return new Moeda(valorKz / 900);
    };

    constructor(valorEmDolar){
        this.valor =  valorEmDolar;
    };
}

console.log(Moeda.converter(200, 0.001))

// Getter e setter

class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this._preco = preco;
    };

    get preco(){
        return this._preco;
    };

    set preco(novoValor){
        if(novoValor < 0){
            throw new Error("O preço não pode ser negativo.");
        };
        this._preco = novoValor;
    };
    get precoComImposto(){
        return this._preco * 1.14; //Com IVA
    }
}

const p = new Produto("Teclado", 100);
p.preco = 150 //Com setter
console.log(p.preco) //com getter

//Campos e metodos privados 
class Carteira{
    #saldo = 0;
    depositar(valor){
        if(valor <= 0) throw new Error('Valor inválido.');
        this.#saldo += valor;
    }
    get saldo(){
        return this.#saldo;
    }

    #registrarOperacoes(){
        console.log("Operação registrada.")
    }

    sacar(valor){
        if(valor > this.#saldo) throw new Error("Saldo insuficiente.");
        this.#saldo -= valor;
        this.#registrarOperacoes();
    }
}

const carteira = new Carteira();
carteira.depositar(500);
carteira.sacar(100)
// carteira.sacar(1000)
console.log("Saldo depositado:",carteira.saldo)

//Metodos Assincronos
class servicoUsuario{
    async buscarUsuario(id){
        const resp = await fetch(`https://dummyjson.com/users/${id}`);
        if(!resp.ok){
            throw new Error("Não foi possivel obter o usuario:")
        }
        return resp.json();
    }
}
const servico = new servicoUsuario();
servico.buscarUsuario(1).then(usuario=>console.log(usuario))

//EXEMPLO 2 Metodos privaod
class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    #encryptPassword() {
        return `***${this.#password}***`;
    }

    getEncryptedPassword() {
        return this.#encryptPassword();
    }
}

const u = new User("Ana", "1234");
console.log(u.getEncryptedPassword()); 


//Generators

class Numeros{
    constructor(inicio, fim){
        this.inicio = inicio;
        this.fim = fim;
    }
    *intervalo(){
        for(let i = this.inicio; i <= this.fim; i++){
            yield i;
        }
    }
}

const numeros = new Numeros(1,5);
for(const n of numeros.intervalo()){
    console.log(n)
}

//Herança e super

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `${this.nome} faz um som`;
  }
}

class Cachorro extends Animal {
  falar() {
    return `${super.falar()}: Au au!`;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.falar()); 