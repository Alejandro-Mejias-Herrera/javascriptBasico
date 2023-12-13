/* Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1) Declarativas
2) De expresión
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .
Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:
return El dato que queremos que nos dé; 
Las funciones declarativas tienen la siguiente sintaxis:
function Nombre de la función (Parámetros de la función) {Instrucciones}
Un ejemplo de una función puede ser una suma:
function suma (a,b) {return a+b;}
Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:
*/

//Hay dos tipos de funciones.

//Declarativas

function miFuncion() {
    return 3;
} 

function suma(a,b) {
    var resultado = a+b;
    return resultado;
}

function suma(a,b) {
    return a+b;
}
//De expresión

var miFuncion = function() {
    return a + b;
}

var suma = function(a,b) {
    return a+b;
}


//console.log(objeto) muestra de inmediato en la consola el valor del parámetro objeto.