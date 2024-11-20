// Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
        console.log("Compromisso \"".concat(compromisso, "\" adicionado \u00E0 agenda."));
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length === 0) {
            console.log("A agenda está vazia.");
        }
        else {
            console.log("Compromissos na agenda:");
            this.compromissos.forEach(function (compromisso, index) {
                console.log("".concat(index + 1, ". ").concat(compromisso));
            });
        }
    };
    return Agenda;
}());
// Criando um objeto da classe Agenda para gerenciar compromissos
var minhaAgenda = new Agenda();
// Adicionando compromissos à agenda
minhaAgenda.adicionarCompromisso("Aulas às 19h30");
minhaAgenda.adicionarCompromisso("Correr às 18h");
// Listando todos os compromissos armazenados na agenda
minhaAgenda.listarCompromissos();
