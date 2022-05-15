import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Board } from 'src/app/domain/Board';
import { BoardService } from 'src/app/services/board-service';
import { BoardComponent } from './board.component';

const SECRETCOMBINATION = { secretCombination: {
  "combination":["PURPLE","GREEN","RED","BLUE"],
  "maxWidth":4}
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
    expect(component.secretCombination).toBeTruthy();
  });

  it(`get secret combination by method and check length before and after`, () => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.returnValue(of(SECRETCOMBINATION));
    expect(component.secretCombination).toBeTruthy();
    expect(component.secretCombination?.secretCombination?.combination).toBeFalsy();
    
    component.getSecretCombination();
    expect(component.secretCombination.secretCombination?.combination).toBeTruthy();
    expect(component.secretCombination.secretCombination?.combination).toHaveSize(4);
    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
  });

  it(`get secret combination by method using the board service and compare`, fakeAsync(() => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(SECRETCOMBINATION));
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
    expect(component.secretCombination).toEqual(combination1);
    
    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`);
    
  }));
  
  it(`Board component to have proposal-combination`, fakeAsync(() => {
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination')).not.toBeNull();

  }));

  it(`send board from boardComponent`, fakeAsync(() => {
    let getSecretCombinationMethod = spyOn(boardService, 'getSecretcombination').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(SECRETCOMBINATION));
    tick();
    
    component.getSecretCombination();
    fixture.detectChanges();

    expect(getSecretCombinationMethod).toHaveBeenCalledTimes(1);
    
    expect(component.secretCombination).toBeTruthy();
    expect(component.secretCombination?.secretCombination?.combination).toBeTruthy();
    expect(component.secretCombination?.secretCombination?.combination).toHaveSize(4);

    
    fixture.debugElement.nativeElement.querySelector('proposal-combination').board = component.secretCombination;
    
    expect(fixture.debugElement.nativeElement.querySelector('proposal-combination').board).toEqual(component.secretCombination);

    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`);
    
  }));
});
