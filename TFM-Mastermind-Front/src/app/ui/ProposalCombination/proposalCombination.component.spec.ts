import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
    expect(component.proposalCombination.length).toHaveSize(0);
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination).toHaveSize(0);

    component.proposal.push(ColorEnum.BLUE, ColorEnum.GREEN, ColorEnum.ORANGE, ColorEnum.PURPLE);
    component.addProposalCombination();
    
    expect(component.proposalCombination).toHaveSize(4);
    expect(component.proposalCombination).toEqual(component.proposal);

  });
});
