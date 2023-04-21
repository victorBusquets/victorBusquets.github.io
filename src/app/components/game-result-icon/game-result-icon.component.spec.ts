import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameResultIconComponent } from './game-result-icon.component';
import { SimpleChange } from '@angular/core';


describe('GameResultIconComponent', () => {
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

  it('component win input changes should set resultLabel', () => {
    expect(component.resultLabel).toBeUndefined();
    component.ngOnChanges({win: new SimpleChange(null, true, true)});
    fixture.detectChanges();
    expect(component.resultLabel).toBe('W');
    component.ngOnChanges({win: new SimpleChange(null, false, true)});
    fixture.detectChanges();
    expect(component.resultLabel).toBe('L');
  });
});
