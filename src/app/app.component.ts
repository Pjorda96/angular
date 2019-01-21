import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pixart';

  dimensiones = [333, 888];


  // Funcion que pide ancho y alto y lo devuelve
  Tamanyo() {
    //Pedir dimensiones
    let ancho = parseInt(prompt("Introduzca los pixeles de ancho que desee"));
    let alto = parseInt(prompt("Introduzca los pixeles de alto que desee"));

    this.dimensiones = [ancho, alto];
  }

  ngOnInit() {
    this.Tamanyo();
  }
}
