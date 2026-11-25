//sintaxe basica

class Config{
    static apiUrl;

    static{
        Config.apiUrl = "https://api.exemplo.com";
        console.log('Configuração inicializada com sucesso.')
    }
}

console.log(Config.apiUrl)

// exemplos simples de uso de blocos estaticos

class Limites {
  static maximo;
  static minimo;

  static {
    const base = 100;

    this.minimo = base / 2;   // 50
    this.maximo = base * 2;   // 200
  }
}

console.log(Limites.minimo); // 50
console.log(Limites.maximo); // 200

// Ordem de execução

class Exemplo {
  static a = "A";

  static {
    console.log("Bloco 1:", this.a); // "A"
    this.b = "B";
  }

  static c = this.b + "C"; // "BC"

  static {
    console.log("Bloco 2:", this.c); // "BC"
  }
}

//Varios blocos

class App {
  static nome = "MinhaApp";

  static {
    this.versao = "1.0";
  }

  static {
    this.ambiente = process.env.NODE_ENV ?? "desenvolvimento";
  }
}

//Erros e try ... catch

class Conexao {
  static url;

  static {
    try {
      this.url = obterUrlDoAmbiente();
    } catch (erro) {
      this.url = "https://api-padrao.exemplo.com";
      console.error("Falha ao obter URL:", erro);
    }
  }
}