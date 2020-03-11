//Hecho por Omar Aké.

var n = 3
var inic = 1
var final = 5
for (let index = inic; index <= final; index++) {
    if(n==index){
        console.log("El número "+n+" esta dentro del rango")
        break;
    }
    if(n!=index && index==final) console.log("El número "+n+" no esta dentro del rango")
}