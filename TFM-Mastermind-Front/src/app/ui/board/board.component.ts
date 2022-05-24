import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private boardService: BoardService,
    private finishDialog: MatDialog
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
    if (this.isFinished()) {
      let resultMessage: string = "";
      if (this.board.actualIntent == 10) {
        resultMessage = "LOSS";
      }
      resultMessage = "WIN";
      const dialogRef = this.finishDialog.open(FinishElementsDialog, { 
        disableClose: true , 
        data: {
          resultMessage: resultMessage,
          secretCombination: this.board.secretCombination
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        this.reStartGame();
      }
      );   
    }
  }

  public isFinished(): boolean{
    if (this.board.results![this.board.actualIntent!-1].winner || this.board.actualIntent == 10) {
      return true;
    }
    return false;
  }

  public reStartGame(){
    this.boardService.newGame().subscribe((boardRes: Board) => {
      this.board = boardRes;
    });
  }
}


@Component({
  selector: 'finish-elements-dialog',
  template: `<h1 mat-dialog-title>You {{data.resultMessage}} the match.</h1>
  <mat-card id="secretBoard" style="max-width: 50%;" fxLayout="row" fxLayoutAlign="space-between center" *ngIf="data.secretCombination?.combination as combi">
        <mat-card [style.background-color]="combi[0]" [style.color]="combi[0]" style="border-radius: 50%; max-width: 3rem" >----</mat-card>
        <mat-card [style.background-color]="combi[1]" [style.color]="combi[1]" style="border-radius: 50%; max-width: 3rem" >----</mat-card>
        <mat-card [style.background-color]="combi[2]" [style.color]="combi[2]" style="border-radius: 50%; max-width: 3rem" >----</mat-card>
        <mat-card [style.background-color]="combi[3]" [style.color]="combi[3]" style="border-radius: 50%; max-width: 3rem" >----</mat-card>
    </mat-card>
  <div mat-dialog-actions>
    <button mat-button color="primary" matDialogClose>Close</button>
  </div>
  `,
})
export class FinishElementsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}