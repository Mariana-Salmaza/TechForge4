// Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).

class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularValorTotalEstoque(): number {
      return this.preco * this.quantidade;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Preço: R$${this.preco.toFixed(2)}`);
      console.log(`Quantidade: ${this.quantidade}`);
      console.log(`Valor total em estoque: R$${this.calcularValorTotalEstoque().toFixed(2)}`);
    }
  }
  
// Instanciando um objeto da classe Produto
const produto = new Produto("Caderno", 15.5, 120);
  
// Invocando os métodos do objeto produto
produto.exibirInformacoes();
  