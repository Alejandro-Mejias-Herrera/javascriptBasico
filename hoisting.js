//Se mandó a llamar a la variable antes de definitla e inicializarla. Se debe hacer al revés.

console.log(miNombre);

var miNombre = "Alejandro";


//Éstemétodo si es correcto.
var miNombre = "Alejandro";
console.log(miNombre);

function hey() {
    function hey();
    console.log("Hola " + miNombre)
}


/* El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.
*/

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Alejandro";

//El output de este codigo seria el siguiente:
//Hola undefined

/*
Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.

Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:

    Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
    La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Basicamente por pasos, lo que hizo el compilador fue esto:

Es por eso que se tiene como buena practica declarar e inicializar tanto variables como funciones al inicio de nuestro programa, sin importar donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas.

Debemos saber que el hoisting solo sucede con las palabras claves var y function, por lo tanto esto nos dice que solo se da en las versiones de ECMAScript 5 o Inferiores, ya que en la version 6 y superiores se permite la declaracion de variables con let y const, que son dos nuevas variables que no activan hoisting.
*/

var nombre = "Alejandro";

function saludo() {
    console.log("Hola "+ nombre);
}

saludo();

/*
A mi modo de ver, y viniendo de un lenguaje fuertemente tipado y fuertemente estructurado como Delphi, me parece que la mejor disciplina seria:

    Declaro e inicializo las variables - Arriba del archivo
    Declaro las funciones - Medio del archivo (por así decirlo)
    Utilizar variables y funciones - Final del archivo

de ese modo consigo tener un archivo mas legible y ordenado y además evito el hoisting
*/