import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() dimensiones: number[];

  columna(){
    let columna = [];
    for(let i=0;i<this.dimensiones[0];i++){
      columna.push("Prueba Columnas");
    }
    return columna;
  }
  fila(){
      let fila = [];
      for(let i=0;i<this.dimensiones[1];i++){
          fila.push("Prueba Filas");
      }
      return fila;
  }


  ngOnInit() {
    let columnas: string[] = this.columna();
    let filas: string[] = this.fila();
  }





}
