"use strict";
let resultado = "";

try{
    //x = 10;
    if(isNaN(resultado)) throw "NO es un número";
    else if(resultado === "")throw "Es cadena vacía";
    else if(resultado >= 0)throw "Valor positivo";
    else if(resultado < 0)throw "Valor negativo";
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message)
}
finally{
    console.log("Termina revisión de errores");
}