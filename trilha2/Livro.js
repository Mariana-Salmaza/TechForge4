// Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        if (this.lido) {
            console.log("O livro \"".concat(this.titulo, "\" j\u00E1 foi marcado como lido."));
        }
        else {
            this.lido = true;
            console.log("Voc\u00EA marcou o livro \"".concat(this.titulo, "\" como lido."));
        }
    };
    Livro.prototype.exibirInformacoes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Autor: ".concat(this.autor));
        console.log("P\u00E1ginas: ".concat(this.paginas));
        console.log("Lido: ".concat(this.lido ? "Sim" : "Não"));
    };
    return Livro;
}());
// Instanciando um objeto da classe Livro
var livro = new Livro("O poder da ação", "Paulo Vieira", 256);
// Invocando os métodos do objeto livro
livro.exibirInformacoes();
livro.marcarComoLido();
