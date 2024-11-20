//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. 
// Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

abstract class FiguraGeometrica {
    abstract calcular(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }
    calcular(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }
    calcular(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }
    calcular(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura) => {
        console.log(`Área: ${figura.calcular()}`);
    });
}

// Instanciando objetos
const circulo1 = new Circulo(5);
const quadrado2 = new Quadrado(4);
const triangulo3 = new Triangulo(6, 8);

// Chamando a função para imprimir as áreas
imprimirAreas([circulo1, quadrado2, triangulo3]);
