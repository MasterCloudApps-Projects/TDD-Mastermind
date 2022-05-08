import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ColorEnum } from 'src/app/domain/Color';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board-service';
import { Proposal } from 'src/app/domain/proposal';

@Component({
  selector: 'proposal-combination',
  templateUrl: './proposalCombination.component.html',
  styleUrls: ['./proposalCombination.component.scss']
})
export class ProposalCombination {
  public proposalCombination: Proposal = {};
  
  constructor(private snackBar: MatSnackBar,
    private boardService: BoardService) {
  }

  public addProposalCombination(){
    if (this.proposal.length == 4) {
      this.proposalCombination.combination = this.proposal;
      this.proposalCombination = this.boardService.addProposalCombination(this.proposalCombination);

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
    
}