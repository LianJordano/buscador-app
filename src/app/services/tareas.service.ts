import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http:HttpClient) { 
  }

  public cargarTareas(url:string){
    return this.http.get(url);
  }
}
