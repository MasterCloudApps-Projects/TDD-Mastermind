import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Board } from 'src/app/domain/Board';
import { BoardService } from 'src/app/services/board-service';
import { BoardComponent, FinishElementsDialog } from './board.component';

const BOARD = { 
  secretCombination: {
  "combination":["PURPLE","GREEN","RED","BLUE"],
  "maxWidth":4},
  proposalCombinations: [{
    "combination":["PURPLE","GREEN","RED","BLUE"],
    "maxWidth":4}],
  actualIntent : 1,
  results : [{
      "white": 3,
      "black": 0,
      "winner": false
    }]
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let boardService: BoardService;
  let httpClient: HttpClient;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        FormsModule,
        DragDropModule,
        MatDialogModule,
      ],
      declarations: [
        BoardComponent
      ],
      providers: [
        { provide: MatDialog, 
          useValue: { open: () => of({id: 1}) }}
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.debugElement.componentInstance;
    boardService  = TestBed.inject(BoardService);
    httpClient = TestBed.inject(HttpClient);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'mastermind-front'`, () => {
    expect(component.title).toEqual('mastermind-front');
  });

  it(`get secret combination`, () => {
    expect(component.board).toBeTruthy();
  });

  it(`get secret combination by method and check length before and after`, () => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.returnValue(of(BOARD));
    expect(component.board).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toBeFalsy();
    
    component.getSecretCombination();
    expect(component.board.secretCombination?.combination).toBeTruthy();
    expect(component.board.secretCombination?.combination).toHaveSize(4);
    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
  });

  it(`get secret combination by method using the board service and compare`, fakeAsync(() => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(BOARD));
    fixture.detectChanges();
    tick();
    
    let combination1: Board = {};
    boardService.getSecretcombination().subscribe((combination: Board) => {
      combination1 = combination;
    });
    
    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
    
    expect(combination1).toBeTruthy();
    expect(combination1.secretCombination?.combination).toBeTruthy();
    expect(combination1.secretCombination?.combination).toHaveSize(4);
    
    component.getSecretCombination();
    expect(component.board).toEqual(combination1);
    
    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`);
    
  }));
  
  it(`Board component to have proposal-combination`, fakeAsync(() => {
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination')).not.toBeNull();

  }));

  it(`send board from boardComponent`, fakeAsync(() => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(BOARD));
    tick();
    
    component.getSecretCombination();
    fixture.detectChanges();

    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
    
    expect(component.board).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toHaveSize(4);

    
    fixture.debugElement.nativeElement.querySelector('proposal-combination').board = component.board;
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination').board).toEqual(component.board);

    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`);
    
  }));

  it(`send board from boardComponent`, fakeAsync(() => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(BOARD));
    tick();
    
    component.getSecretCombination();
    fixture.detectChanges();

    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
    
    expect(component.board).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toHaveSize(4);

    
    fixture.debugElement.nativeElement.querySelector('proposal-combination').board = component.board;
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination').board).toEqual(component.board);

    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`);
    
  }));

  it(`setBoard in boardComponent with parameters`, () => {
    expect(component.board).toEqual({});
    
    component.setBoard(BOARD);

    expect(component.board).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toBeTruthy();
    expect(component.board?.actualIntent).toEqual(1);
    expect(component.board?.secretCombination).toEqual(BOARD.secretCombination);
    expect(component.board?.proposalCombinations).toEqual(BOARD.proposalCombinations);
    expect(component.board).toEqual(BOARD);
    
  });

  it(`setBoard in boardComponent with parameters from proposalCombination`, () => {
    expect(component.board).toEqual({});
    fixture.debugElement.nativeElement.querySelector('proposal-combination').eventEmitter = BOARD;
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination').eventEmitter).toEqual(BOARD);
    
    component.setBoard(BOARD);
    
    expect(component.board).toBeTruthy();
    expect(component.board?.secretCombination?.combination).toBeTruthy();
    expect(component.board?.actualIntent).toEqual(1);
    expect(component.board?.secretCombination).toEqual(BOARD.secretCombination);
    expect(component.board?.proposalCombinations).toEqual(BOARD.proposalCombinations);
    expect(component.board).toEqual(BOARD);
    
  });

  it(`check if game is finished get correct value`, () => {
    let dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open').and.returnValue({afterClosed: () => of({id: 1})} as MatDialogRef<typeof FinishElementsDialog>);
    let board: Board = { 
      secretCombination: {
      "combination":["PURPLE","GREEN","RED","BLUE"],
      "maxWidth":4},
      proposalCombinations: [{
        "combination":["PURPLE","GREEN","RED","BLUE"],
        "maxWidth":4}],
      actualIntent : 1,
      results : [{
          "white": 3,
          "black": 0,
          "winner": false
        }]
    }
    component.setBoard(board);
    expect(component.isFinished()).toBeFalse();

    board.results= [{}, {}, {}, {}, {}, {}, {}, {}, {}, {
      "white": 1,
      "black": 3,
      "winner": false
    }]
    board.actualIntent = 10;
    component.setBoard(board);
    expect(component.isFinished()).toBeTrue();

    board.actualIntent = 1;
    component.setBoard(board);
    expect(component.isFinished()).toBeFalse();

    board.results= [{
      "white": 0,
      "black": 4,
      "winner": true
    }]
    board.actualIntent = 1;
    component.setBoard(board);
    expect(component.isFinished()).toBeTrue();

  });

  it(`get not null Board on new game and made http call`, fakeAsync(() => {
    spyOn(boardService, 'newGame').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(BOARD));
    tick();
    fixture.detectChanges();

    let board: Board = {};
    boardService.newGame().subscribe((boardRes: Board) => {
      board = boardRes;
    });
    expect(board).toBeTruthy();
    expect(board.actualIntent).toBeTruthy();
    expect(board.proposalCombinations).toBeTruthy();
    expect(board.results).toBeTruthy();
    expect(board.secretCombination).toBeTruthy();
    expect(httpClientMethod).toHaveBeenCalledTimes(1);
  }));

  it(`get Board on new game and check the component board is changed`, fakeAsync(() => {
    spyOn(boardService, 'newGame').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(BOARD));
    
    component.board = {};
    expect(component.board).toEqual({});
    let board1 = component.board;
    expect(board1).toEqual({});
    
    component.reStartGame();
    let board2 = component.board;
    tick();
    fixture.detectChanges();
    
    expect(board2).not.toEqual({});
    expect(board2).toBeTruthy();
    expect(board2.actualIntent).toBeTruthy();
    expect(board2.actualIntent).toEqual(1);
    expect(board2.proposalCombinations).toBeTruthy();
    expect(board2.results).toBeTruthy();
    expect(board2.secretCombination).toBeTruthy();
    expect(httpClientMethod).toHaveBeenCalledTimes(1);
  }));

  it(`set board and check if game is finished and call open dialog`, fakeAsync(() => {
    let dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open').and.returnValue({afterClosed: () => of({id: 1})} as MatDialogRef<typeof FinishElementsDialog>);
    tick();
    fixture.detectChanges();

    let board: Board = { 
      secretCombination: {
      "combination":["PURPLE","GREEN","RED","BLUE"],
      "maxWidth":4},
      proposalCombinations: [{
        "combination":["PURPLE","GREEN","RED","BLUE"],
        "maxWidth":4}],
      actualIntent : 1,
      results : [{
          "white": 3,
          "black": 0,
          "winner": false
        }]
    }
    component.setBoard(board);
    expect(component.isFinished()).toBeFalse();
    expect(dialog.open).toHaveBeenCalledTimes(0);

    board.results= [{}, {}, {}, {}, {}, {}, {}, {}, {}, {
      "white": 1,
      "black": 3,
      "winner": false
    }]
    board.actualIntent = 10;
    component.setBoard(board);
    expect(component.isFinished()).toBeTrue();
    expect(dialog.open).toHaveBeenCalledTimes(1);

    board.actualIntent = 1;
    component.setBoard(board);
    expect(component.isFinished()).toBeFalse();
    expect(dialog.open).toHaveBeenCalledTimes(1);

    board.results= [{
      "white": 0,
      "black": 4,
      "winner": true
    }]
    board.actualIntent = 1;
    component.setBoard(board);
    expect(component.isFinished()).toBeTrue();
    expect(dialog.open).toHaveBeenCalledTimes(2);

  }));
});
