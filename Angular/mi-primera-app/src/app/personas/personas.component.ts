import { Component } from "@angular/core";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    //styleUrls: ["./personas.component.css"]
    styles : ["h1{color: blue;}"] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = "No se ha agregado ninguna persona";
    titulo = "Licenciado";
    mostrar = false;
    
    agregarPersona(){
        this.mostrar = true;
        this.mensaje = "Persona agregada";
    }

    /*modificarTitulo(event: Event){
        console.log("Entrando a método modificar Título");
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}