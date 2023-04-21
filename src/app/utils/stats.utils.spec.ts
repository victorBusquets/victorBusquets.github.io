import { TestBed } from '@angular/core/testing';
import { StatsUtils } from './stats.utils';
import { GAME_MOCK } from '@mock/game.mock';
import { TEAM_MOCK } from '@mock/team.mock';
import { EXPECTED_STATS_MOCK } from '@mock/stats.mock';

describe('StatsUtils', () => {
  let statsUtils = new StatsUtils();

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(statsUtils).toBeTruthy();
  });

  it('getStatsFromGames should return expected stats', ()=>{
    const stats = statsUtils.getStatsFromGames([GAME_MOCK], TEAM_MOCK);
    expect(stats).toEqual(EXPECTED_STATS_MOCK);
  })
});
