//Revisitando o create()


const carro = {
     ligar(){
         console.log("O carro esta ligado!")
     }
}

const carroCor = Object.create(carro)
carroCor.ligar()
carroCor.marca = function(){
   return `O meu carro é de marca Toyota`
}
console.log(carroCor.marca())

//Exemplo 2 -simples 

const programador={
  linguagem(){
      console.log(`Eu amo programar em ${this.tipo_linguagem}`)
   }
}

const pessoaProgramador = Object.create(programador)
pessoaProgramador.tipo_linguagem = 'JavaScript'
pessoaProgramador.linguagem()
