//Hecho por Omar Aké

var listaDatos =[1,2,3,4,5,6,7,8,9,10]
var x
var y = true
var resultado
var iterador = 0
do {
    if(listaDatos[iterador]<listaDatos[iterador+1]) x=true;
    else y=false;
    iterador++
} while(iterador<listaDatos.length-1)
resultado = x && y
if(resultado) {
    console.log("La lista esta ordenada")
    console.log(resultado)
}else {
    console.log("¡La lista esta desordenada")
    console.log(resultado)
}
