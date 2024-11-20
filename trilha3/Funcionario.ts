// Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. 
// Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    getSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {

    calcularBonus(): number {
        return this.salario * 0.1;
    }
}

class Operario extends Funcionario {

    calcularBonus(): number {
        return this.salario * 0.05;
    }
}


function salarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`Salário com bônus de ${funcionario['nome']}: ${funcionario.getSalarioComBonus()}`);
    });
}

// Criando instâncias dos funcionários
const gerente = new Gerente("Daiane", 4000);
const operario = new Operario("Ana", 2000);

// Chamando a função para calcular o salário com bônus
salarioComBonus([gerente, operario]);


