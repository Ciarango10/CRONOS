import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LogginService.service';
import { PersonasService } from './persona/personas.service';
import { Persona } from './personas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

constructor(private loggingService:LoggingService, private personasService: PersonasService) {}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }



}
