function miFuncion1(){
    console.log("Función 1");
}

function miFuncion2(){
    console.log("Función 2");
}

miFuncion2();
miFuncion1();

//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback("Resultado: "+ res);
}

sumar(5,3,imprimir);

