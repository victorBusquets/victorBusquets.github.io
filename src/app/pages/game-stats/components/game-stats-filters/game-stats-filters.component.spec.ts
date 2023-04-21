import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameStatsFiltersComponent } from './game-stats-filters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GameStatsFiltersComponent', () => {
  let component: GameStatsFiltersComponent;
  let fixture: ComponentFixture<GameStatsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStatsFiltersComponent ],
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStatsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
