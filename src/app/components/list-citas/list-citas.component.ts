import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {

  @Input() listAdoCitas:any;
  @Output() remove = new EventEmitter<number>();


  removeCita(index:number){
    this.remove.emit(index);
  }
  
}
