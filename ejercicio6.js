//Hecho por Omar Aké

var numero = 2
var lista = [1,2,3,4]

function determinarExistencia(numero){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == numero){
            return true;
        }
    }
}

if(determinarExistencia(numero)){
    console.log("el numero "+numero+" esta en la lista")
    console.log(true)
}else{
    console.log("el número "+numero+" no esta en la lista")
    console.log(false)
}