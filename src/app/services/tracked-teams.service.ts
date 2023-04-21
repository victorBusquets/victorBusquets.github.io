import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeamInterface } from '@interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackedTeamsService {
  private trackedTeamsSubject$: BehaviorSubject<TeamInterface[]> = new BehaviorSubject(new Array());
  private trackedTeams: TeamInterface[] = [];

  addTrackedTeam(team: TeamInterface): void {
    const teamIsNotTracked: boolean = this.checkTeamIsNotTracked(team);

    if(teamIsNotTracked) {
      this.trackedTeams.push(team);
      this.trackedTeamsSubject$.next(this.trackedTeams);
    }
  }

  removeTrackedTeam(team: TeamInterface): void {
    const index: number = this.trackedTeams.findIndex(trackedTeam => trackedTeam.id == team.id);
    this.trackedTeams.splice(index, 1);
    this.trackedTeamsSubject$.next(this.trackedTeams);
  }

  getTrackedTeams(): Observable<TeamInterface[]> {
    return this.trackedTeamsSubject$ as Observable<TeamInterface[]>;
  }

  private checkTeamIsNotTracked(team: TeamInterface): boolean {
    return this.trackedTeams.findIndex((trackedTeam) => trackedTeam.id === team.id) === -1;
  }
}
