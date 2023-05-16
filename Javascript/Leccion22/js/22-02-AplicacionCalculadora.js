console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);//Convierte el valor de cadena a int
    if(isNaN(resultado))
        resultado = "La operación no incluye números";
    document.getElementById("resultado").innerHTML = "Resultado: "+ resultado;
    console.log( "Resultado: "+ resultado)
}