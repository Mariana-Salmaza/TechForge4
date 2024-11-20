// Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). 
// A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.


abstract class Pagamento {
    
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string, private nomeTitular: string, private valor: number) {
        super();
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento de R$${this.valor.toFixed(2)} processado com o cartão de crédito ${this.numeroCartao}.`);
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(private valor: number) {
        super();
    }

    private gerarCodigoBoleto(): string {
        return `BOL${Math.random().toString().slice(2, 18)}`;
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Pagamento de R$${this.valor.toFixed(2)} gerado com o código de boleto: ${codigoBoleto}`);
    }
}

function processarPagamento(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}

// Criando objetos das subclasses
const pagamentoCartao = new PagamentoCartao("1234567890123456", "Mariana", 150.75);
const pagamentoBoleto = new PagamentoBoleto(250.50);

// Processando os pagamentos
processarPagamento([pagamentoCartao, pagamentoBoleto]);

