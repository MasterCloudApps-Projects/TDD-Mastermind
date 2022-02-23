import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public title = 'mastermind-front';
  
  public secretCombination:string[] = [];


  public getSecretCombination(){
    this.secretCombination = ['red', 'green', 'blue', 'black'];
  }
}

