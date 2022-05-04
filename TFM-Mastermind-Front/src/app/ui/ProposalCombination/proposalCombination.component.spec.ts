import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProposalCombination } from "./proposalcombination.component";

describe('ProposalCombination', () => {
  let component: ProposalCombination;
  let fixture: ComponentFixture<ProposalCombination>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
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

  it(`add proposal combination by method and check length before and after`, () => {
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination.length).toHaveSize(0);
    
    component.addProposalCombination();
    expect(component.proposalCombination).toBeTruthy();
    expect(component.proposalCombination).toHaveSize(4);
  });
});
