var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

//filter retorna aquellos articulos que cumplen con la condición. Devuelve objetos.
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <=500;
});

//Map devuelve una propiedad de todos los objetos. Por ejemplo, el nombre.
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});

//find busca un valor que coincida con lo pedido. Si encuentra uno, no sigue buscando.
/*
El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

    La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
*/

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

//forEach ejecuta lo que le digamos por cada elemento que haya en nuestro array.
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//some comprueba si al menos un artículo cumple con la condición que le damos, devolviendo true or false.
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
})


