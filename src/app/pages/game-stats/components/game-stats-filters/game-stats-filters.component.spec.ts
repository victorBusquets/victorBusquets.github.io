import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameStatsFiltersComponent } from './game-stats-filters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TEAM_MOCK } from '@mock/team.mock';
import { TrackedTeamsService } from '@services/tracked-teams.service';
import { NbaService } from '@services/nba.service';
import { of } from 'rxjs';

describe('GameStatsFiltersComponent', () => {
  let component: GameStatsFiltersComponent;
  let fixture: ComponentFixture<GameStatsFiltersComponent>;
  let trackedTeamsService: TrackedTeamsService;
  let nbaService: NbaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStatsFiltersComponent ],
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStatsFiltersComponent);
    component = fixture.componentInstance;
    trackedTeamsService = TestBed.inject(TrackedTeamsService);
    nbaService = TestBed.inject(NbaService);
    component.teams = [TEAM_MOCK];
    spyOn(nbaService, 'getTeams').and.returnValue(of([TEAM_MOCK]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackTeam should call trackedTeamsService.addTrackedTeam', ()=>{
    const teamId = TEAM_MOCK.id;
    const spy = spyOn(trackedTeamsService, 'addTrackedTeam');
    component.filtersForm.patchValue({team: teamId}, {emitEvent: false});
    component.trackTeam();
    expect(spy).toHaveBeenCalled();
  });

  it('clearFilters should clear filterForms and call getInitialOptions', ()=>{
    const division = 'division';
    const spy = spyOn<any>(component, 'getInitialOptions');
    component.filtersForm.patchValue({division}, {emitEvent: false});
    expect(component.filtersForm.value.division).toEqual(division);
    component.clearFilters();
    expect(spy).toHaveBeenCalled();
    expect(component.filtersForm.value.division).toEqual('');
  });

});
