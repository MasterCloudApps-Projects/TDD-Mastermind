import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BoardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mastermind-front'`, () => {
    const fixture = TestBed.createComponent(BoardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mastermind-front');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //console.log(compiled.getAttribute('ng-version'));
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
