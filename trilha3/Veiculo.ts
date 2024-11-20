// Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". 
// Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". 
//Instancie objetos de ambas as subclasses e chame o método mover().

class Veiculo {
    public mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    override mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    override mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

// Instanciando os objetos
const carro = new Carro();
const bicicleta = new Bicicleta();


carro.mover();
bicicleta.mover();
