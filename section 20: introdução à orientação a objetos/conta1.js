/* 
1. criar conta abstrata chamada ContaBancaria   
- cliente   
- numero   
- saldo   
- depositar(valor)   
- sacar(valor)

3. criar classe Cliente e compor as classes concretas
  - nome
  - documento

4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.
  - Pessoa Física tem documento CPF e Juridica tem documento CNPJ
*/

class Cliente {
  constructor(nome) {
    if (this.constructor === Cliente) {
      throw new Error('Cliente é classe abstrata!')
    }
    this.nome = nome
  }
}

class Fisica extends Cliente {
  constructor(nome) {
    super(nome)
    this.cpf = Math.floor(Math.random() * 99999999999) + 11111111111
  }
}

class Juridica extends Cliente {
  constructor(nome) {
    super(nome)
    this.cnpj = Math.floor(Math.random() * 99999999999999) + 11111111111111
  }
}

class ContaBancaria {
  constructor(cliente) {
    if (this.constructor === ContaBancaria) {
      throw new Error('Essa classe é abstrata!')
    }
    this.cliente = cliente
    this.numero = Math.floor(Math.random() * 9999) + 1000
    this.saldo = 0 // porque o saldo sempre vai iniciar em 0
  }
  depositar(valor) {
    this.saldo += valor
  }
  sacar() {
    throw new Error('Esse método precisa ser implementado.')
  }
}

/* 
2. Criar duas classes que herdam de ContaBancaria
- ContaCorrente
  - limite
  - sacar(valor)
- ContaPoupanca
  - aniversario
  - sacar(valor)
*/

class ContaCorrente extends ContaBancaria {
  constructor(cliente) {
    super(cliente)
    this.limite = 0.00
  }
  sacar(valor) {
    let disponivel = this.saldo + this.limite
    if (valor > disponivel) {
      console.log(`Você não pode sacar R$${valor.toFixed(2)}! Seu saldo é R$${disponivel.toFixed(2)}`)
    } else {
      this.saldo -= valor
    }
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(cliente) {
    super(cliente)
    const data = new Date()
    this.aniversario = `${data.getDay()+3}/${data.getMonth()+1}/${data.getFullYear()}`
  }
  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`Você não pode sacar R$${valor.toFixed(2)}! Seu saldo é R$${this.saldo.toFixed(2)}`)
    } else {
      this.saldo -= valor
    }
  }
}

const Joel = new Fisica('Joel')
const JoelCC = new ContaCorrente(Joel)
console.log(JoelCC)
const Maira = new Juridica('Maira')
const MairaCP = new ContaPoupanca(Maira)
console.log(MairaCP)