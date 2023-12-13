/*
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

    for - recorre un bloque de código varias veces

    for/in - recorre las propiedades de un objeto

    for/of - recorre los valores de un objeto iterable

    while - recorre un bloque de código mientras se cumple una condición específica

    do/while - también recorre un bloque de código mientras se cumple una condición específica
*/

var estudiantes = ["Ana", "Beatriz", "Camilo", "Diego", "Elsa", "Francisca"];

//Dentro de esta función se observa dos maneras de llamar a una variable dentro de un texto. La primera es concatenando o anidando. La segunda, usando temple literals.
function saludarEstudiantes(estudiante) {
    console.log("Hola, "  + estudiante + " estoy usando concatenación");
    console.log(`Hola, ${estudiante} usando template literals`);
    console.log(`Hola, ${estudiante}`);
}

//for. se inicializa un parámetro, se establece una condición, se varía el parámetro.
for(i=0; i<estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//for of
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//while. Se usa mientras lo del paréntesis sea cierto. 
while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}




//Desafío. 
/*En este desafío tu función solution recibirá 3 parámetros:

    estudiantes: un array de strings con varios nombres de estudiantes.
    deathCount: un número entero.
    nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

Tu función debe retornar un array de elementos con las siguientes indicaciones:

    Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

    Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.
*/


//Solución con while.
export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }


//for
export function solution(estudiantes, deathCount, nuevo) {
  for (deathCount; deathCount > 0; deathCount--) {
    estudiantes.pop();
  }
  estudiantes.push(nuevo);
  return estudiantes;
}


