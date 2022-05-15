import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from "rxjs";
import { ColorEnum } from "src/app/domain/Color";
import { Proposal } from "src/app/domain/proposal";
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
    spyOn(boardService, 'addProposalCombination').and.returnValue(of(PROPOSALCOMBINATION));
    
    expect(component.proposalCombination).toBeTruthy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();

    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.PURPLE);
    component.addProposalCombination();

    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(PROPOSALCOMBINATION.combination);

  });

  it(`add proposal combination by user as proposal list and check the proposal to be 4 color`, () => {
    spyOn(boardService, 'addProposalCombination').and.returnValue(of(PROPOSALCOMBINATION));
    
    expect(component.proposalCombination).toBeTruthy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
  
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE);
    component.addProposalCombination();
    
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.proposalCombination?.combination).not.toEqual(component.proposal);
  
    component.proposal.push(ColorEnum.RED);
    component.addProposalCombination();
    fixture.detectChanges();

    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(PROPOSALCOMBINATION.combination);
  });

  it(`add proposal combination and use boardSerive to submit and get proposal`, fakeAsync(() => {
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.PURPLE);

    spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));
    
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

  it(`add proposal combination by method using the board service and compare`, fakeAsync(() => {
    let addProposalCombinationMethod = spyOn(boardService, 'addProposalCombination').withArgs({combination: component.proposal}).and.callThrough();
    let httpClientMethod = spyOn(httpClient, 'put').and.returnValue(of(PROPOSALCOMBINATION));
  
    fixture.detectChanges();
    tick();

    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.PURPLE);

    let proposalCombination1: Proposal = {combination: component.proposal};

    let proposalCombination2: Proposal = {};
    boardService.addProposalCombination(proposalCombination1).subscribe((combination: Proposal) => {
      proposalCombination2 = combination;
    });
    
    expect(addProposalCombinationMethod).toHaveBeenCalledTimes(1);
    component.addProposalCombination();
    expect(proposalCombination1).toBeTruthy();
    expect(proposalCombination1?.combination).toBeTruthy();
    expect(proposalCombination1?.combination).toHaveSize(4);
    expect(proposalCombination1?.maxWidth).not.toEqual(4);
    
    expect(proposalCombination2).toBeTruthy();
    expect(proposalCombination2?.combination).toBeTruthy();
    expect(proposalCombination2?.combination).toHaveSize(4);
    expect(proposalCombination2?.maxWidth).toEqual(4);

    expect(httpClientMethod).toHaveBeenCalledWith(`/api/board/`, {combination: component.proposal});
    
  }));

  it(`eventEmitter not to be null`,() => {
    expect(component.eventEmitter).not.toBeNull();
  });

});
