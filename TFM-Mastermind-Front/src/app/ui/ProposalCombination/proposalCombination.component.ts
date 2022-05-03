import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './proposalCombination.component.html',
  styleUrls: ['./proposalCombination.component.scss']
})
export class ProposalCombination {

  public proposalCombination:string[] = ['black', 'red', 'green', 'blue'];
  constructor(
  ) {
  }

}

