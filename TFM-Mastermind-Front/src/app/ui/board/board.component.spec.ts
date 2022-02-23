import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BoardComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.debugElement.componentInstance;
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
    expect(component.secretCombination).toBeTruthy();
    expect(component.secretCombination).toHaveSize(0);
    
    component.getSecretCombination();
    expect(component.secretCombination).toHaveSize(4);
  });
});
