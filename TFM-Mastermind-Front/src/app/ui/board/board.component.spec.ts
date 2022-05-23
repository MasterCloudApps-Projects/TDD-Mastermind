import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Board } from 'src/app/domain/Board';
import { BoardService } from 'src/app/services/board-service';
import { BoardComponent } from './board.component';

const BOARD = { 
  secretCombination: {
  "combination":["PURPLE","GREEN","RED","BLUE"],
  "maxWidth":4},
  proposalCombinations: [{
    "combination":["PURPLE","GREEN","RED","BLUE"],
    "maxWidth":4}],
  actualIntent : 1
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
        DragDropModule
      ],
      declarations: [
        BoardComponent
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

});
