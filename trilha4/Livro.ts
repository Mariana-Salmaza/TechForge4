interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const livro1: Livro = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true };
const livro2: Livro = { titulo: "1984", autor: "George Orwell", disponivel: false };
const livro3: Livro = { titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true };

const biblioteca = new Biblioteca([livro1, livro2, livro3]);

console.log("Livros disponíveis:", biblioteca.buscarLivrosDisponiveis());
