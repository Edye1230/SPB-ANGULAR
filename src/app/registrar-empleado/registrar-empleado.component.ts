import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    console.log(this.empleado);
    
  }

  registerEmpleado(){
    this.empleadoServicio.registerEmpleado(this.empleado).subscribe(data =>{
      console.log(data)
      }, error => console.log(error)
    )
  };

  registroCorrecto(){
    this.router.navigate(["/empleados"]);
  }

  onSubmit(){
    this.registerEmpleado();
    console.log(this.empleado);
  }

}
