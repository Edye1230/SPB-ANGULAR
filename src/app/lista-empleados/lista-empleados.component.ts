import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router:Router){}

    ngOnInit(): void {
      this.getEmpleados();
    }

    eliminarEmpleado(id:number){
      this.empleadoServicio.deleteEmpleado(id).subscribe(data => {
        console.log(data);
        this.getEmpleados();
      })
    }

    private getEmpleados(){
      this.empleadoServicio.getEmpleados().subscribe(data =>{
        this.empleados = data;
      })
    }

  }

