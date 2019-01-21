import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  color: string = '';
  colores: string[] = ['black', 'grey', 'red', 'orange', 'brown', 'blue'];
  colores2: string[] = ['white', 'darkgrey', 'pink', 'yellow', 'green', 'purple'];

  constructor() { }

  ngOnInit() { }

  selectorColor(event) {
    this.color = event.backgroundColor;
  }
}
