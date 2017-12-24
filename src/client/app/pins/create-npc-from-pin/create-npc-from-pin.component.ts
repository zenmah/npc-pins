import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Npc } from '../../npcs/npc';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-create-npc-from-pin',
  templateUrl: './create-npc-from-pin.component.html',
  styles: [`img {width:100%} .example-full-width > * {width:100%}`]
})



export class CreateNpcFromPinComponent implements OnInit {

  @Output() npcSaved = new EventEmitter();
  @Input() Npc: Npc;

  TagOptions = new TagOptions();
  constructor() { }

  ngOnInit() {
  }

  saveNpc() {
    this.npcSaved.emit(this.Npc);
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.Npc.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    const index = this.Npc.tags.indexOf(tag);

    if (index >= 0) {
      this.Npc.tags.splice(index, 1);
    }
  }

}
class TagOptions {
  Visible = true;
  Selectable = true;
  Removable = true;
  AddOnBlur = true;
  SeparatorKeysCodes = [ENTER, COMMA];
}
