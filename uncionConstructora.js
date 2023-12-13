//Array que guardará los autos.
var autos = [];
// variable que guardará el número de autos
var cantidadDeAutos = prompt("¿Cuántos autos desea ingresar?")

//Función para crear un auto
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Agregar autos con while
while (autos.length < cantidadDeAutos) {
    var marca = prompt(`Ingrese la marca del vehículo ${autos.length+1}`);
    var modelo = prompt(`Infrese el modelo del vehículo ${autos.length+1}`);
    var annio = prompt(`Ingrese el año del vehículo ${autos.length+1}`);

    var autoNuevo = new auto(marca, modelo, annio);
    autos.push(autoNuevo);
    console.log(autos[autos.length-1]);

}

//agregar autos con for
for(i=0; i<cantidadDeAutos; i++) {
    var marca = prompt(`Ingrese la marca del vehículo ${i+1}`);
    var modelo = prompt(`Infrese el modelo del vehículo ${i+1}`);
    var annio = prompt(`Ingrese el año del vehículo ${i+1}`);

    var autoNuevo = new auto(marca, modelo, annio);
    autos.push(autoNuevo);
    console.log(autos[i]);
}


//Crear autos nuevos 1 a 1 y agregarlos al arreglo autos.
var autoNuevo1 = new auto("Tesla", "Model 3", 2020);
autos.push(autoNuevo1);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
autos.push(autoNuevo2);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
autos.push(autoNuevo3);


//Propuestas de compañeros
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }

  var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var anio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]




function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio}

for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
    var nuevoAuto = new auto(marca[i], modelo[i], anio[i]);
    console.log(nuevoAuto)
}
