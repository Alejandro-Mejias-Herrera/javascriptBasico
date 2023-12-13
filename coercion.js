/*
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/

//Coerción implícita.

4 + "7"
//47 devuelve un string

4 * "7"
//28 devuelve un number. 

3 + true 
//4

//Coerción explícita.
var a = 31;
//Convertir a en un string.
var b = String(a);
//Convertir b en un number.
var c = Number(b);