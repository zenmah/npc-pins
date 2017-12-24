import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Npc } from '../../npcs/npc';

@Component({
  selector: 'app-create-npc-from-pin',
  templateUrl: './create-npc-from-pin.component.html',
  styles: [`img {width:100%} .example-full-width > * {width:100%}`]
})
export class CreateNpcFromPinComponent implements OnInit {

  @Output() npcSaved = new EventEmitter();
  @Input() Npc: Npc;

  constructor() { }

  ngOnInit() {
  }

  saveNpc() {
    this.npcSaved.emit(this.Npc);
  }

}
