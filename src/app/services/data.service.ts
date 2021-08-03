import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPreguntas() {
    return this.http.get('https://my-json-server.typicode.com/KevinChangoluisa/preguntasJson/preguntas');
  }
}
