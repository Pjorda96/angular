import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor() { }

  @Input() color: string;

  ngOnInit() {
  }

}
