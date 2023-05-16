//async/await. Solo puede ser usada dentro de una funcion declarada con async
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa );
}

funcionConPromesaYAwait();