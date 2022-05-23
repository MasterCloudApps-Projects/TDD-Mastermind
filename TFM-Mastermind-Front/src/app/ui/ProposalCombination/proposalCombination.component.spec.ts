import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { not } from "@angular/compiler/src/output/output_ast";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from "rxjs";
import { Board } from "src/app/domain/Board";
import { ColorEnum } from "src/app/domain/Color";
import { Proposal } from "src/app/domain/Proposal";
import { Result } from "src/app/domain/Result";
import { BoardService } from "src/app/services/board-service";
import { ProposalCombination } from "./proposalCombination.component";

const BOARD = { secretCombination: {
  "combination":["PURPLE","GREEN","RED","BLUE"],
  "maxWidth":4}
}

const PROPOSALCOMBINATION = {
  "combination":["PURPLE","GREEN","RED","BLUE"],
  "maxWidth":4
}

const RESULT = {
  "white": 3,
  "black": 0,
  "winner": false
}
const RESULTS = [
  {
    "white": 3,
    "black": 0,
    "winner": false
  },
  {
    "white": 3,
    "black": 0,
    "winner": false
  }
]

describe('ProposalCombination', () => {
  let component: ProposalCombination;
  let fixture: ComponentFixture<ProposalCombination>;
  let boardService: BoardService;
  let httpClient: HttpClient;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        DragDropModule,
        MatSnackBarModule,
        NoopAnimationsModule,
      ],
      declarations: [
        ProposalCombination,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProposalCombination);
    component = fixture.debugElement.componentInstance;
    boardService  = TestBed.inject(BoardService);
    httpClient = TestBed.inject(HttpClient);
  }));

  it('should create the proposal component', () => {
    expect(component).toBeTruthy();
  });

  it(`get proposal combination`, () => {
    expect(component.proposalCombination).toBeTruthy();
  });

  it(`add proposal combination by user as proposal list check length and content before and after`, () => {
    spyOn(boardService, 'addProposalCombination').and.returnValue(of(RESULT));
    
    expect(component.proposalCombination).toBeTruthy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();

    component.proposal.push(ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED, ColorEnum.BLUE);
    component.addProposalCombination();

    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(PROPOSALCOMBINATION.combination);

  });

  it(`add proposal combination by user as proposal list and check the proposal to be 4 color`, () => {
    spyOn(boardService, 'addProposalCombination').and.returnValue(of(RESULT));
    
    expect(component.proposalCombination).toBeTruthy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
  
    component.proposal.push(ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED);
    component.addProposalCombination();
    
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.proposalCombination?.combination).not.toEqual(component.proposal);
  
    component.proposal.push(ColorEnum.BLUE);
    component.addProposalCombination();
    fixture.detectChanges();

    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(PROPOSALCOMBINATION.combination);
  });

  it(`add proposal combination and use boardSerive to submit and get proposal`, fakeAsync(() => {
    component.proposal.push(ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED, ColorEnum.BLUE);

    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(RESULT));
    
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.addProposalCombination();
    fixture.detectChanges();
    tick();
    
    expect(component.proposalCombination?.combination).toBeTruthy();
    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.maxWidth).toEqual(4);
    expect(httpClientMethod).toHaveBeenCalledTimes(1);
  }));

  it(`add proposal combination by method using the board service and compare the Result`, fakeAsync(() => {
    let addProposalCombinationMethod = spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(RESULT));
  
    fixture.detectChanges();
    tick();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.proposal.push(ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED, ColorEnum.BLUE);

    let proposalCombination1: Proposal = {combination: component.proposal};

    let result: Result = {};
    boardService.addProposalCombination(proposalCombination1).subscribe((res: Result) => {
      result = res;
    });
    
    expect(addProposalCombinationMethod).toHaveBeenCalledTimes(1);
    component.addProposalCombination();
    expect(proposalCombination1).toBeTruthy();
    expect(proposalCombination1?.combination).toBeTruthy();
    expect(proposalCombination1?.combination).toHaveSize(4);
    expect(proposalCombination1?.maxWidth).not.toEqual(4);
    
    expect(result).toBeTruthy();
    expect(result?.black).toEqual(RESULT.black);
    expect(result?.white).toEqual(RESULT.white);
    expect(result?.winner).toEqual(RESULT.winner);

    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`, proposalCombination1);
    
  }));

  it(`eventEmitter not to be null`,() => {
    expect(component.eventEmitter).not.toBeNull();
  });

  
  it(`send board to boardComponent`, fakeAsync(() => {
    let board: Board = {};
    component.board = BOARD;
    expect(component.eventEmitter).not.toBeNull();
    
    expect(component.board).not.toBeNull();
    component.eventEmitter.subscribe((value: Board) => board = value);
    
    fixture.detectChanges();
    tick();
    component.emitEvent();


    expect(board.secretCombination?.combination).toEqual(BOARD.secretCombination.combination);
    expect(board.secretCombination?.maxWidth).toEqual(4);
    
  }));

  it(`add proposal combination by method and send event to the boardcomponent`, fakeAsync(() => {
    let addProposalCombinationMethod = spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));
    
    let board: Board = {};
    component.board = BOARD;
    component.eventEmitter.subscribe((value: Board) => board = value);
    
    fixture.detectChanges();
    tick();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.proposal.push(ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED, ColorEnum.BLUE);

    component.addProposalCombination();

    expect(addProposalCombinationMethod).toHaveBeenCalledTimes(1);
    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`, {combination: [ColorEnum.PURPLE, ColorEnum.GREEN, ColorEnum.RED, ColorEnum.BLUE]});
    
    let proposal = new Proposal({...PROPOSALCOMBINATION})
    expect(board.secretCombination?.combination).toEqual(BOARD.secretCombination.combination);
    expect(board.secretCombination?.maxWidth).toEqual(4);
    expect(board.proposalCombination).not.toBeNull();
    expect(board.proposalCombination).toContain(proposal);
    expect(board.proposalCombination![0]).toEqual(proposal);
  
  }));

  it(`add proposal combination and after incorrect add check proposal lenght still not 0`, () => {
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE);
    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.addProposalCombination();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.proposal).toHaveSize(3);
    
  });

  it(`add proposal combination and after correct add check proposal lenght is 0`, () => {
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.RED);
    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.proposal).toHaveSize(4);
    
    component.addProposalCombination();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeTruthy();
    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposal).toHaveSize(0);
    
  });

  it(`add proposal combination and after incorrect add, check colorList not to be on initial value`, () => {
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE);
    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.colorList).toEqual(Object.values(ColorEnum));
    
    component.colorList.shift();
    component.colorList.shift();
    
    expect(component.colorList).not.toEqual(Object.values(ColorEnum));
    
    component.addProposalCombination();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    expect(component.colorList).not.toEqual(Object.values(ColorEnum));
    
  });

  it(`add proposal combination and after correct add, check colorList to be on initial value`, () => {
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.RED);
    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.colorList).toEqual(Object.values(ColorEnum));
    
    component.colorList.shift();
    component.colorList.shift();
    
    expect(component.colorList).not.toEqual(Object.values(ColorEnum));
    
    component.addProposalCombination();
    
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeTruthy();
    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.colorList).toEqual(Object.values(ColorEnum));

  });

  it(`get not null result using board service`, () => {
    spyOn(boardService, 'getResults').and.callThrough();

    let result = boardService.getResults();
    expect(result).toBeTruthy();
  });

  it(`get Result object using board service and http call`, fakeAsync(() => {
    spyOn(boardService, 'getResults').and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'get').and.returnValue(of(RESULTS));
    fixture.detectChanges();
    tick();
    
    let results: Result[] = [];
    boardService.getResults().subscribe((result: Result[]) => {
      results = result;
    });

    expect(results).toBeTruthy();
    expect(results.length).toBeGreaterThan(0);

    expect(httpClientMethod).toHaveBeenCalledTimes(1);
  }));

  it(`get not null Results color lista as string list`, fakeAsync(() => {
    let resultList = component.getResultListColor(RESULT);
    expect(resultList).not.toBeNull();
    expect(resultList).toBeTruthy();
    expect(resultList?.length).toBeGreaterThanOrEqual(0);
  }));

});
