//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('inicio función');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitTimeout();