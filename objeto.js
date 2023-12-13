/*
Un objeto en programación es una representación abstracta de un objeto en la vida real, sin embargo también puede entenderse como un contenedor de datos.
Ejemplo:
Una botella de refresco tiene ciertas características y acciones.-
Características: altura, volumen, color, contenido, dureza etc…
Acciones: beber, reciclar, rehusar, aventar, abrir tapa, etc…

Respectivamente a estas características y acciones se les conoce como atributos(características) y métodos(acciones) en programación.

Los objetos son usados para almacenar ciertos datos que de otra manera serían muy sensibles al hackeo, por otro lado un objeto también puede ser el valor de una variable.

A modo de adelanto una clase a su vez es un molde que puede almacenar objetos y esta también como el objeto tiene atributos y métodos que puede heredar a cada uno de esos objetos conocida esta propiedad como herencia, en base a eso la clase this, es la clase principal desde la cual se ejecuta javascript a modo de ejemplo puedes consultar en consola del navegador console.log(this); y te darás una mejor idea.
*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

//Buscar un valor del objeto
miAuto.marca;

//Llamar a la función
miAuto.detalleDelAuto();

