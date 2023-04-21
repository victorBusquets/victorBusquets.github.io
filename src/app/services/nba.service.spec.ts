import { TestBed } from '@angular/core/testing';
import { NbaService } from './nba.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TEAM_MOCK } from '@mock/team.mock';
import { API_ROUTES } from '@constants/api-routes.const';
import { GAME_MOCK } from '@mock/game.mock';
import { DateUtils } from '@utils/date.utils';
import { of } from 'rxjs';
import { StatsModel } from '@models/stats.class';
import { EXPECTED_STATS_MOCK } from '@mock/stats.mock';

describe('NbaService', () => {
  let dateUtils: DateUtils;
  let nbaService: NbaService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    nbaService = TestBed.inject(NbaService);
    dateUtils = new DateUtils();
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(nbaService).toBeTruthy();
  });

  it('should call getTeamById', () => {
    const teamResponse = TEAM_MOCK;
    const teamId = teamResponse.id;
    nbaService.getTeamById(teamId).subscribe((res) => {
      expect(res).toEqual(teamResponse);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${API_ROUTES.getTeams}/${teamId}`
    });

    req.flush(teamResponse);
  });

  
  it('should call getLastResults', () => {
    const date = dateUtils.getDaySubstract(1);
    const gameResponse = [GAME_MOCK];
    const team = TEAM_MOCK;
    const displayedDays = 1;

    nbaService.getLastResults(team, displayedDays).subscribe((res) => {
      expect(res).toEqual(gameResponse);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${API_ROUTES.getGames}?dates=${date}&page=0&per_page=${displayedDays}&team_ids=${team.id}`
    });

    req.flush({data: gameResponse});
  });

  it('getLastResultsStats should x', () => {
    spyOn(nbaService, 'getLastResults').and.returnValue(of([GAME_MOCK]));
    nbaService.getLastResultsStats(TEAM_MOCK, 1).subscribe((stats)=>{
      expect(stats).toEqual(EXPECTED_STATS_MOCK);
    })
  });

});
