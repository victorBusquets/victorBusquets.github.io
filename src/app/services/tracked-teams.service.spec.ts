import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackedTeamsService } from './tracked-teams.service';
import { TEAM_MOCK } from '@mock/team.mock';

describe('TrackedTeamsService', () => {
  let trackedTeamsService: TrackedTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    trackedTeamsService = TestBed.inject(TrackedTeamsService);
  });

  it('should be created', () => {
    expect(trackedTeamsService).toBeTruthy();
  });

  it('addTrackedTeam with new item should add to trackedTeams', ()=>{
    expect(trackedTeamsService['trackedTeams'].length).toEqual(0);
    trackedTeamsService.addTrackedTeam(TEAM_MOCK);
    expect(trackedTeamsService['trackedTeams'].length).toEqual(1);
  });

  it('addTrackedTeam with existing item not should add to trackedTeams', ()=>{
    trackedTeamsService.addTrackedTeam(TEAM_MOCK);
    trackedTeamsService.addTrackedTeam(TEAM_MOCK);
    expect(trackedTeamsService['trackedTeams'].length).toEqual(1);
  });

  it('removeTrackedTeam should remove item trackedTeams', ()=>{
    trackedTeamsService.addTrackedTeam(TEAM_MOCK);
    expect(trackedTeamsService['trackedTeams'].length).toEqual(1);
    trackedTeamsService.removeTrackedTeam(TEAM_MOCK);
    expect(trackedTeamsService['trackedTeams'].length).toEqual(0);
  });
});
