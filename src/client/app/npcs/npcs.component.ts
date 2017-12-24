import { Component, OnInit } from '@angular/core';
import { Npc } from './npc';
import { NpcService } from './npc.service';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styles: [`.example-card {  width: 400px; }`]
})
export class NpcsComponent implements OnInit {
  addingNpc = false;
  Npcs: Npc[] = [];
  selectedNpc: Npc;

  constructor(private npcService: NpcService) {}

  ngOnInit() {
    this.getNpcs();
  }

  cancel() {
    this.addingNpc = false;
    this.selectedNpc = null;
  }

  deleteNpc(npc: Npc) {
    this.npcService.deleteNpc(npc).subscribe(res => {
      this.Npcs = this.Npcs.filter(h => h !== npc);
      if (this.selectedNpc === npc) {
        this.selectedNpc = null;
      }
    });
  }

  getNpcs() {
    return this.npcService.getNpcs().subscribe(npcs => {
      this.Npcs = npcs;
    });
  }

  enableAddMode() {
    this.addingNpc = true;
    this.selectedNpc = new Npc('');
  }

  onSelect(npc: Npc) {
    this.addingNpc = false;
    this.selectedNpc = npc;
  }

  save() {
    if (this.addingNpc) {
      this.npcService.addNpc(this.selectedNpc).subscribe(npc => {
        this.addingNpc = false;
        this.selectedNpc = null;
        this.Npcs.push(npc);
      });
    } else {
      this.npcService.updateNpc(this.selectedNpc).subscribe(npc => {
        this.addingNpc = false;
        this.selectedNpc = null;
      });
    }
  }
}
