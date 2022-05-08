import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ColorEnum } from 'src/app/domain/Color';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'proposal-combination',
  templateUrl: './proposalCombination.component.html',
  styleUrls: ['./proposalCombination.component.scss']
})
export class ProposalCombination {
  public proposalCombination:string[] = [];
  
  constructor(private snackBar: MatSnackBar) {
  }

  public addProposalCombination(){
    if (this.proposal.length == 4) {
      this.proposalCombination = this.proposal;
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