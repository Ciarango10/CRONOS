let miNumero = "18";
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if (edad >= 18){
    console.log("La persona puede votar")
}

else{
    console.log("Muy joven para votar")
}

//Ejercicio Terneario

let resultado = (edad >= 18) ? "La persona puede votar" : "Muy joven para votar"
console.log(resultado);

