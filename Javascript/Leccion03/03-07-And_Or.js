//AND = &&, regresa true si ambos son true.
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
console.log("Se encuentra dentro del rango")
}

else{
    console.log("No se encuentra dentro del rango")
}

//OR = ||, regresa true si cualquier operando es true

let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso ){
    console.log("Puedes ir a ver el partido de tu hijo")
}

else{
    console.log("No tienes permiso para hacerlo")
}


