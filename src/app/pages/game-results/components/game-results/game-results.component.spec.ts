import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameResultsComponent } from './game-results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NbaService } from '@services/nba.service';
import { TEAM_MOCK } from '@mock/team.mock';
import { of } from 'rxjs';
import { GAME_MOCK } from '@mock/game.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpinnerModule } from '@components/spinner/spinner.module';

describe('GameResultsComponent', () => {
  let component: GameResultsComponent;
  let fixture: ComponentFixture<GameResultsComponent>;
  let nbaService: NbaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameResultsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, SpinnerModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultsComponent);
    component = fixture.componentInstance;
    nbaService = TestBed.inject(NbaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLastResults on getTeamById response', () => {
    const spy = spyOn(nbaService, 'getLastResults').and.returnValue(of([GAME_MOCK]));
    spyOn(nbaService, 'getTeamById').and.returnValue(of(TEAM_MOCK));
    
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
