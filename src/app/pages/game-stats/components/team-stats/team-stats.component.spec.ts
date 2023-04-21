import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeamStatsComponent } from './team-stats.component';
import { TEAM_2_MOCK, TEAM_MOCK } from '@mock/team.mock';
import { DialogModule } from '@components/dialog/dialog.module';
import { NbaService } from '@services/nba.service';
import { GAME_MOCK } from '@mock/game.mock';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleChange } from '@angular/core';

fdescribe('TeamStatsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;
  let nbaService: NbaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStatsComponent],
      imports: [ HttpClientTestingModule, DialogModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStatsComponent);
    component = fixture.componentInstance;
    nbaService = TestBed.inject(NbaService);
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
    const spy = spyOn(nbaService, 'removeTrackedTeam').and.returnValue(void 0);
    
    component.removeTrackedTeam(TEAM_MOCK);
    expect(spy).toHaveBeenCalled();
  });

  it('on component init should set team logo', ()=> {
    const expectedLogo = `https://interstate21.com/nba-logos/${TEAM_MOCK.abbreviation}.png`;
    expect(component.teamLogo).toEqual(expectedLogo);
  });

  it('on team changes should update team logo', ()=> {
    const expectedLogo = `https://interstate21.com/nba-logos/${TEAM_MOCK.abbreviation}.png`;
    expect(component.teamLogo).toEqual(expectedLogo);
    component.ngOnChanges({team: new SimpleChange(null, TEAM_2_MOCK, true)});
    fixture.detectChanges();
    const updatedLogo = `https://interstate21.com/nba-logos/${TEAM_2_MOCK.abbreviation}.png`;
    expect(component.teamLogo).toEqual(updatedLogo);

  })
});
