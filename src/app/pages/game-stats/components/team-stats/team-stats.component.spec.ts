import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeamStatsComponent } from './team-stats.component';
import { DialogModule } from '@components/dialog/dialog.module';
import { NbaService } from '@services/nba.service';
import { TEAM_MOCK } from '@mock/team.mock';
import { GAME_MOCK } from '@mock/game.mock';
import { STATS_MOCK } from '@mock/stats.mock';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleChange } from '@angular/core';
import { TrackedTeamsService } from '@services/tracked-teams.service';
import { SpinnerModule } from '@components/spinner/spinner.module';

describe('TeamStatsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;
  let nbaService: NbaService;
  let trackedTeamsService: TrackedTeamsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStatsComponent],
      imports: [ HttpClientTestingModule, DialogModule, RouterTestingModule, SpinnerModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStatsComponent);
    component = fixture.componentInstance;
    nbaService = TestBed.inject(NbaService);
    trackedTeamsService = TestBed.inject(TrackedTeamsService);

    component.team = TEAM_MOCK;
    spyOn(nbaService, 'getLastResults').and.returnValue(of([GAME_MOCK]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showModal should call confirmDialog.showModal()', () => {
    const spy = spyOn(component.confirmDialog, 'showModal');
    component.showModal();
    expect(true).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('closeModal should call confirmDialog.closeModal()', () => {
    const spy = spyOn(component.confirmDialog, 'closeModal');
    component.closeModal();
    expect(spy).toHaveBeenCalled();
  });

  it('removeTrackedTeam should call removeTrackedTeam from nbaService', () => {
    const spy = spyOn(trackedTeamsService, 'removeTrackedTeam').and.returnValue(void 0);
    
    component.removeTrackedTeam(TEAM_MOCK);
    expect(spy).toHaveBeenCalled();
  });

  it('on team changes should update team logo', ()=> {
    component.ngOnChanges({team: new SimpleChange(null, TEAM_MOCK, true)});
    fixture.detectChanges();
    const updatedLogo = `https://interstate21.com/nba-logos/${TEAM_MOCK.abbreviation}.png`;
    expect(component.teamLogo).toEqual(updatedLogo);
  });

  it('on displayedDays changes should call getLastResultsStats and set stats', ()=> {
    const spy = spyOn(nbaService, 'getLastResultsStats').and.returnValue(of(STATS_MOCK));
    const displayedDays: number = 10;
    component.ngOnChanges({displayedDays: new SimpleChange(null, displayedDays, true)});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.stats).toEqual(STATS_MOCK)
  });
});
