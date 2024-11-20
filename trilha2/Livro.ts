// Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        if (this.lido) {
            console.log(`O livro "${this.titulo}" já foi marcado como lido.`);
        } else {
            this.lido = true;
            console.log(`Você marcou o livro "${this.titulo}" como lido.`);
        }
    }

    exibirInformacoes(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Lido: ${this.lido ? "Sim" : "Não"}`);
    }

}

// Instanciando um objeto da classe Livro
let livro = new Livro("O poder da ação", "Paulo Vieira", 256);

// Invocando os métodos do objeto livro
livro.exibirInformacoes();
livro.marcarComoLido();