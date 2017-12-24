import { Component, OnInit } from '@angular/core';
import { Pin } from './pin';
import { PinsService } from './pins.service';
import { PinBoard } from './PinBoard';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styles: [
    `
  .example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }
  .example-full-width {
    width: 100%;
  }
  .pin  {
    height:300px;
  }`
  ]
})
export class PinsComponent implements OnInit {
  Pins: Pin[] = [];
  Boards: PinBoard[] = [];
  SelectedBoard: PinBoard;
  selectedBoardId = '';
  BoardId: string;
  Cursor: string;
  selectedPin: Pin;

  constructor(private pinService: PinsService) {}

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

}
