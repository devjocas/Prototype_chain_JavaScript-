class Forma{
    area(){
        throw new Error("Implemente o metodo area.");
    }
    
}

class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio=raio;
    }
    area(){
        return Math.PI**this.raio**2
    }
}
class Retangulo extends Forma{
    constructor(base,altura){
        super();
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base**this.altura
    }
}

const formas = [new Circulo(2), new Retangulo(3,4)]

for(const forma of formas){
    console.log(forma.area())
}