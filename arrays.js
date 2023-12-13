var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

//push añade elementos al final del array.
var masFrutas = frutas.push("Uvas","Naranjas");

//pop elimina el último elemento del array.
var ultimo = frutas.pop("Naranjas");

//unshift agrega un elemento al comienzo del array.
var nuevaLongitud = frutas.unshift("Naranjas");

//shift elimina el elemento que está al inicio del array.
var borrarPrimeraFruta = frutas.shift();

//devuelve la posición de un elemento del array.
var posicion = frutas.indexOf("Fresa");

console.log(frutas);

//Devuelve el tamaño del array.
console.log(frutas.length);

//Devuelve el tercer elemento (se cuenta dsde cero).
console.log(frutas[2]);

//Muestra el tipo de dato. Es este caso, es string. 
typeof frutas[1]; 


//splice permite eliminar o modificar cualquier elemento, indicando su posición en el array.
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //modificar moto

articulos.splice(2, 1, 'laptop'); /*se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar*/
//['carro', 'celular', 'laptop', 'tv', 'libro']


//Desafío 
var arraySecreto = ["Huevo","Gallina","Vaca"];
export function solution(arraySecreto) {
    if (typeof arraySecreto[0] == "string") {
      return true;
    } else {
      return false;
    }
  }
  
  //Versión 2
  export function solution(arraySecreto) {
    return(typeof arraySecreto[0] == "string"? true: false);
  }

  //Versión 3
  export function solution(arraySecreto) {
    return(typeof arraySecreto[0] == "string");
  }


