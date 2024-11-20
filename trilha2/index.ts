// exercicio 1
// Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    private titular: string;
    private saldo: number;
  
    constructor(titular: string, saldo: number = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do depósito deve ser maior que zero.");
        return;
      }

      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
      this.exibirSaldo();
    }
  
    sacar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do saque deve ser maior que zero.");
        return;
      }
      if (valor > this.saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
        return;
      }
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
      this.exibirSaldo();
    }
  
    exibirSaldo(): void {
      console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
}

// ===========================
let pessoaTitular = "Mariana";
let pessoaSaldo = 100;

// Instanciando um objeto da classe ContaBancaria
let conta = new ContaBancaria(pessoaTitular, pessoaSaldo);

// Invocando os métodos da objeto conta
conta.depositar(50);
conta.sacar(10);

