import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ColorEnum } from 'src/app/domain/Color';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board-service';
import { Proposal } from 'src/app/domain/proposal';
import { Board } from 'src/app/domain/Board';
import { Result } from 'src/app/domain/Result';

@Component({
  selector: 'proposal-combination',
  templateUrl: './proposalCombination.component.html',
  styleUrls: ['./proposalCombination.component.scss']
})
export class ProposalCombination {
  public proposalCombination: Proposal = {};

  @Input()
  public board: Board = {};

  @Output()
  public eventEmitter = new EventEmitter<Board>();
  
  constructor(private snackBar: MatSnackBar,
    private boardService: BoardService) {
  }

  public addProposalCombination(){
    if (this.proposal.length == 4) {
      let proposalRequest: Proposal = {combination: this.proposal};
      this.boardService.addProposalCombination(proposalRequest).subscribe((result: Result) => {
        this.proposalCombination = new Proposal({combination: this.proposal, maxWidth: 4});
        if (this.board.proposalCombination == null) {
          this.board.proposalCombination = [];
        }
        this.board.proposalCombination.unshift(this.proposalCombination);
        this.emitEvent();
        this.proposal = [];
        this.colorList = Object.values(ColorEnum);
      });
    } else {
      this.snackBar.open('The proposal has to have 4 color.','', {
        duration: 2000
      });
    }
    
  }
  
  public proposal: string[] = [];
  public colorList = Object.values(ColorEnum);
  
  public drop(event: CdkDragDrop<any>, name:string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (name == "doingList" && event.container.data.length < 4) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
          );
      }else if(name == "doneList"){
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
          );
      }
    }
  }
    
  public emitEvent(){
    this.eventEmitter.emit(this.board);
  }

}