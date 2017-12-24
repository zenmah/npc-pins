import { Component, OnInit, Input } from '@angular/core';
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

  @Input() Pin: Pin;
  constructor() { }

  ngOnInit() {
  }

}
