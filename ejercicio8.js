//Hecho por Omar Aké

var lista1 = [1,2,3,4,5,6,7,8,9,10]
var lista2 = [1,2,3,4,5,6,7,8,9,10]
var resultado
var x
var y = true
var iterador = 0
do {
if (lista1[iterador] == lista2[iterador]) x = true
else y = false
iterador++
} while(iterador < lista1.length || iterador < lista2.length)
resultado = x && y
if(resultado) {
    console.log("Ambas son iguales")
    console.log(resultado)
}else {
    console.log("ambas son diferentes")
    console.log(resultado)
}