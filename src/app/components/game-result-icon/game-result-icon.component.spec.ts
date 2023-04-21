import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameResultIconComponent } from './game-result-icon.component';


fdescribe('GameResultIconComponent', () => {
  let component: GameResultIconComponent;
  let fixture: ComponentFixture<GameResultIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameResultIconComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
