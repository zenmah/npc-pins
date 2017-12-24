import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pin } from './pin';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styles: [`
  .pin {
    height: 100%;
    background-size: cover;
    background-position-x: center;}
    ;`]
})
export class PinComponent implements OnInit {

  @Output() npcCreated = new EventEmitter();
  @Input() Pin: Pin;
  constructor() { }

  ngOnInit() {
  }

  createNpc()  {
    this.npcCreated.emit(this.Pin);
  }

}
