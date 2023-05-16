//Llamadas asíncronas con uso setTimeOut 
function miFuncionCallBack(){
    console.log("Saludo asíncrono despues de 3s");  
}

setTimeout(miFuncionCallBack,3000);//después de 3s

setTimeout(function(){console.log("Saludo asíncrono 2 despues de 4s")},4000);

setTimeout(() => console.log("Saludo asíncrono 3 despues de 5s"), 5000);