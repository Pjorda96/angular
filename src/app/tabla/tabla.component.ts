import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }


  @Input() dimensiones: number[];

  columnas()
  {
    let columnas=[];
    
    for (let j = 0; j < 6; j++) {
        columnas[j]="prueba";
      
    }
    return columnas;
  }

  filas()
  {
    let filas=[];
    for (let j = 0; j < 6; j++) {
        filas[j]="prueba-fila";
      
    }
    return filas;

  }

  ngOnInit()
  {
    let columnas: any[0] =this.columnas;
    let filas: any[0] =this.columnas;

  }

}
