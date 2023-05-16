let promesa = new Promise((resolver) =>{
    console.log("Inicio promesa");
    setTimeout(() =>{resolver("Saludos con promesa y timeout")},3000);
    console.log("Fin Promesa");
});

promesa.then(valor => console.log(valor));