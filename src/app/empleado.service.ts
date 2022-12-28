import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:8080/api/v1/empleados';

  constructor(private httpClient : HttpClient) { }

  getEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

  registerEmpleado(empleado: Empleado): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, empleado);
  }

  deleteEmpleado(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}