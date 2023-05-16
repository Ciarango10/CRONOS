import { Component, ElementRef,ViewChild} from '@angular/core';
import { LoggingService } from '../LogginService.service';
import { PersonasService } from '../persona/personas.service';
import { Persona } from '../personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  
  //@Output() personaCreada = new EventEmitter<Persona>(); 
  
  nombreInput:String = "";
  apellidoInput:String = "";

  constructor(private loggingService:LoggingService, private personasService:PersonasService ) {
    this.personasService.saludar.subscribe((indice: number) => alert("El indice es: " + indice));
   }
  
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona1)
  }
}
