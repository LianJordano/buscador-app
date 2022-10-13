import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  tarea: string = "";
  public listaTareas: any = [];
  placeholder:string=""
  constructor(private TareasService: TareasService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  public cargarTareas() {

    if(this.tarea!=""){
      this.TareasService.cargarTareas('http://127.0.0.1:8000/api/tareas/'+this.tarea)
      .subscribe((respuesta) => {
        this.listaTareas = respuesta;
      });
    }else{
      this.listaTareas=[];
    }

  }
}
