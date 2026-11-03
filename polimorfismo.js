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


//criando uma classe simples 

class Notification{
    constructor(message){
        this.message=message

    }
    send(){
        return `Nova mensagem registrada: ${this.message}`
    }
}
class EmailNotification extends Notification{
   send(){
     return `Email: ${this.message} `
   }
}
class SMSNotification extends Notification{
   send(){
     return `SMS Message: ${this.message} `
   }
}

const notificacao = new Notification("verifica o teu email ou os serviço de mensagem.")
const email = new EmailNotification("O seu email foi registrado com sucesso, porfavor verifique o codigo.")
const sms =  new SMSNotification("Sua SMS foi encaminhada com sucesso.")

console.log(notificacao.send())
console.log(email.send())
console.log(sms.send())
