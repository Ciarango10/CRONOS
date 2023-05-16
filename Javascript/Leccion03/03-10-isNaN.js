//NaN = not a number
let miNumero = "18";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)){
    console.log("No es un numero");
}

else{
    
    if (edad >= 18){
        console.log("La persona puede votar")
    }
    
    else{
        console.log("Muy joven para votar")
    }
}

if (isNaN(edad)){
    console.log("No es un numero");
}
else{
 let resultado = (edad >= 18) ? "La persona puede votar" : "Muy joven para votar"
console.log(resultado);   
}
