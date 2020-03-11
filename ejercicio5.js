//Hecho por Omar Aké

var numDatos = 6, resultado = 0
var numeros = [0,0,0,0,0,0]
for (let index = 0; index < numDatos; index++) {
    numeros[index] = 2
}

var sumarNumeros = function(datos){
    for (let index = 0; index < datos.length; index++) {
        resultado += datos[index]
    }
    console.log("Suma de los elementos en la lista: "+resultado)
}

sumarNumeros(numeros)