class Empleado {
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}  depto: ${this._departamento} `;
    }
}

//Dependiendo el tipo se ejecuta la función(padre o hija)
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){//Si tipo es una instancia de la clase Gerente
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado){//Si tipo es una instancia de la clase Empleado
        console.log("Es un tipo Empleado")
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Object){//Si tipo es una instancia de la clase object(Clase padre de todas las clases)
        console.log("Es un tipo object")
    }
}

let empleado1 = new Empleado("Juan",3000);
let gerente1 = new Gerente("Carlos",5000,"Sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);
