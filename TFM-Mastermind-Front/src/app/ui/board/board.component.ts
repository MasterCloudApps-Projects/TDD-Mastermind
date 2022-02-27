import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board-service';

@Component({
  selector: 'app-root',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public title = 'mastermind-front';
  
  public secretCombination:string[] = [];

  constructor(
    private boardService: BoardService
  ) {}


  public getSecretCombination(){
    this.secretCombination = this.boardService.getSecretcombination();
  }
}

