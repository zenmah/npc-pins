import { Component, OnInit, Input } from '@angular/core';
import { Npc } from './npc';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styles: [`.example-card {  width: 500px; }`]
})
export class NpcComponent implements OnInit {

  @Input() Npc:Npc;
  constructor() { }

  ngOnInit() {
  }

}
