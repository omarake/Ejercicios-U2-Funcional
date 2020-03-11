//Hecho por Omar Aké

var numeros = [5,10,20,15], aux = numeros[0]
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
}
console.log("El numero "+aux+" es el mayor de los 4")