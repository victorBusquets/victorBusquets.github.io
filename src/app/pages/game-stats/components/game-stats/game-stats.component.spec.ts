import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameStatsComponent } from './game-stats.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameStatsFiltersModule } from '../game-stats-filters/game-stats-filters.module';

describe('GameStatsComponent', () => {
  let component: GameStatsComponent;
  let fixture: ComponentFixture<GameStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStatsComponent ],
      imports: [ HttpClientTestingModule, GameStatsFiltersModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setDisplayedDays should set displayedDays', () => {
    const displayedDays = 10;
    component.setDisplayedDays(displayedDays);
    expect(component.displayedDays).toEqual(displayedDays);
  });
});
