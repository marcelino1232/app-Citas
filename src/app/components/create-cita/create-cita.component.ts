import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})
export class CreateCitaComponent {

  @Output()  nuevaCita = new EventEmitter<any>();

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  validator = false;


  agregarCita()
  {
    if(this.nombre === '' || this.fecha ==='' || this.hora === '' || this.sintomas === ''){
      this.validator = true;
      return;
    }

    this.validator = false;

    const cita = {
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      sintomas:this.sintomas
    }

    this.nuevaCita.emit(cita);
    
    this.resetCampos();
  }

  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
