var lado = document.getElementById("lado");
var diametro = document.getElementById("diametro");

//Crear funciones constructoras

//Crear clase con ES5 para triángulo equilátero
function Triangulo (lado) {
    this.lado = lado;
    /*this._lado = function () {
        return lado;
    }; */
}

/*// getter
Triangulo.prototype.getLado = function () {
    return this._lado();
}

//setter
Triangulo.prototype.setLado = function (newLado) {
    this._lado = function () {
        return newLado;
    };
}*/

//Crear método área triángulo
Triangulo.prototype.equiArea = function () {
    return (Math.sqrt(3)/4) * (Math.pow(this.lado,2));
}

//Crear método perímetro triángulo
Triangulo.prototype.equiPerimetro = function () {
    return this.lado * 3;
}

//Crear clase con ES5 para círculo
function Circulo (diametro) {
    this.diametro = diametro
}

//Crear método área círculo
Circulo.prototype.circArea = function () {
    return Math.PI * (Math.pow(this.diametro,2)/4);
}

//Crear método perímetro círculo
Circulo.prototype.circPerimetro = function () {
    return Math.PI * this.diametro;
}

//Función con las instancias de los polígonos
function poligonos(lado, diametro) {
    lado = this.lado.value;
    diametro = this.diametro.value;

    //Instanciar triángulo
    var newTriangulo = new Triangulo(lado);

    //Instanciar círculo
    var newCirculo = new Circulo(diametro);

    //Comprobación en consola
    console.log(newTriangulo.equiArea());
    console.log(newTriangulo.equiPerimetro());
    console.log(newCirculo.circArea());
    console.log(newCirculo.circPerimetro());

    //Devolución en el DOM
    document.getElementById("devolucion").innerHTML = "<p>El área de tu triángulo es: " + newTriangulo.equiArea() + "</p>" + "<p>El perímetro de tu triángulo es: " + newTriangulo.equiPerimetro() + "</p>" + "<p>El área de tu círculo es: " + newCirculo.circArea() + "</p>" + "<p>El perímetro de tu círculo es: " + newCirculo.circPerimetro() + "</p>";
}

//Me faltan los getters y setters: No supe cómo hacer que dejara de darme NaN, incluso si aplico el parseInt cuando pongo los getters y setters, problamente es por la función polígonos que hice. Así que preferí dejarlo funcionando sin los getters y setters.