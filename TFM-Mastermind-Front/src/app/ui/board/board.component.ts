import { Component } from '@angular/core';
import { Board } from 'src/app/domain/Board';
import { BoardService } from 'src/app/services/board-service';

@Component({
  selector: 'app-root',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public title = 'mastermind-front';
  
  public board: Board = {};

  constructor(
    private boardService: BoardService
  ) {
    this.getSecretCombination();
  }



  public getSecretCombination(){
    this.boardService.getSecretcombination().subscribe((combination: Board) => {
      this.board = combination;
    });
  }

  public setBoard(board: Board){
    this.board = board;
  }

  public isFinished(): boolean{
    if (this.board.results![this.board.actualIntent!-1].winner || this.board.actualIntent == 10) {
      return true;
    }
    return false;
  }
}

