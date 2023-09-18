function mostrar() {
    alert('Probando mi funcion')
}

//FUNDAMENTOS

//Variables (let y var)

//Se declara variable y se asigna un valor
var edad = 10
var edad = 20
console.log('Edad: ',edad) //20

//Declare una unica vez la variable usando LET
let edades = 15
edades = 20
console.log('Edades', edades)

var antiguedad = 10
if(antiguedad > 5) {
    var antiguedad = 20
    console.log('Antiguedad ',antiguedad)
}
console.log('Antiguedad ',antiguedad) 

let numero = 10
if (numero > 5) {
    let numero = 20
    console.log('Numero: ',numero)
}
console.log('Numero ', numero)

//CONSTANTES
const dni = 32770120
//error de sintaxis - No se puede asignar un nuevo valor a 
//dni: 32770120
dni = 31066389

console.log(dni)

const age = 22
if(age > 21){
    const age = 35
    console.log(age)
}
console.log(age)

//ARREGLOS
const miArreglo = [10,20,30]
miArreglo.push(40)
console.log(miArreglo)

//OBJETOS
const persona = {
    nombre:'Pepe',
    edad:20
}

console.log(persona.nombre)