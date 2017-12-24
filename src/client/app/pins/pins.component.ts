import { Component, OnInit, ViewChild } from '@angular/core';
import { Pin } from './pin';
import { PinsService } from './pins.service';
import { PinBoard } from './PinBoard';
import { Npc } from '../npcs/npc';
import { NpcService } from '../npcs/npc.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss']
})
export class PinsComponent implements OnInit {
  ShowDetails: boolean;
  Pins: Pin[] = [];
  Boards: PinBoard[] = [];
  SelectedBoard: PinBoard;
  selectedBoardId = '';
  BoardId: string;
  Cursor: string;
  SelectedPin: Pin;
  NewNpc: Npc;

  constructor(private pinService: PinsService, private npcService: NpcService) {}

  @ViewChild('sidenav') sidenav: MatSidenav;
  ngOnInit() {
    this.getBoards();
  }

  SelectDefaultBoard(): any {
    if (this.selectedBoardId === '' && this.Boards.length > 0) {
      console.log(this.selectedBoardId);
      console.log(this.Boards.length);
      this.selectedBoardId = this.Boards[0].board_id;
      this.changeBoard(this.selectedBoardId);
    }
  }

  getBoards() {
    return this.pinService.getBoards(null).subscribe(boards => {
      this.Boards = boards.data;
      this.SelectDefaultBoard();
    });
  }

  changeBoard(boardId: string) {
    if (boardId) {
      this.SelectedBoard = this.Boards.find(
        board => board.board_id === boardId
      );
      return this.pinService.getPins(boardId, null).subscribe(pins => {
        this.Pins = pins.data;
        this.Cursor = pins.cursor;
      });
    }
  }

  createNpcFromPin(pin: Pin) {
    this.NewNpc = new Npc(pin.image_url);
    this.sidenav.open();
  }
  saveNpc(npc: Npc) {
    this.npcService.addNpc(npc).subscribe();
  }

}
