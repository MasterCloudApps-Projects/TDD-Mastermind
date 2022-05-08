import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from '@angular/router/testing';
import { ColorEnum } from "src/app/domain/Color";
import { ProposalCombination } from "./proposalCombination.component";

describe('ProposalCombination', () => {
  let component: ProposalCombination;
  let fixture: ComponentFixture<ProposalCombination>;
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
        ProposalCombination
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProposalCombination);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the proposal component', () => {
    expect(component).toBeTruthy();
  });

  it(`get proposal combination`, () => {
    expect(component.proposalCombination).toBeTruthy();
  });

  it(`add proposal combination by user as proposal list check length and content before and after`, () => {
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();

    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.PURPLE);
    component.addProposalCombination();
    
    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(component.proposal);

  });

  it(`add proposal combination by user as proposal list and check the proposal to be 4 color`, () => {
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination?.combination).toBeFalsy();

    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE);
    component.addProposalCombination();
    
    expect(component.proposalCombination?.combination).toBeFalsy();
    expect(component.proposalCombination?.combination).not.toEqual(component.proposal);

    component.proposal.push(ColorEnum.RED);
    component.addProposalCombination();
    
    expect(component.proposalCombination?.combination).toHaveSize(4);
    expect(component.proposalCombination?.combination).toEqual(component.proposal);
  });
});
