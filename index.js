class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  // Métodos da classe
  saudacao() {
    const message = `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    console.log(message);
    return message;
  }
  
  // Métodos estáticos
  static criarPessoaAleatoria() {
    const nomes = ['Ana', 'Pedro', 'Mariana', 'João', 'Luiza'];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const idade = Math.floor(Math.random() * 50) + 18;
    return new Pessoa(nome, idade);
  }
}

const fetchDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.3;
      if (sucesso) {
        resolve({ dados: 'Dados recebidos com sucesso!' });
      } else {
        reject(new Error('Falha ao buscar dados'));
      }
    }, 1000);
  });
};

const eu = new Pessoa('Lulu', 36);
eu.saudacao();

fetchDados()
    .then(result => console.log(result.dados))
    .catch(error => console.log(error.message))

// node test.js