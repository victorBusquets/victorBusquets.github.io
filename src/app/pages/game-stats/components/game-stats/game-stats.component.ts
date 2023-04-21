import { Component } from '@angular/core';
import { DEFAULT_DISPLAYED_DAYS } from '@constants/displayed-days.const';
import { TRACK_BY_INDEX } from '@constants/track-by-index.const';
import { TeamInterface } from '@interfaces/team.interface';
import { TrackedTeamsService } from '@services/tracked-teams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent {
  trackedTeams$!: Observable<TeamInterface[]>;
  displayedDays: number = DEFAULT_DISPLAYED_DAYS;
  trackByIndex = TRACK_BY_INDEX;

  constructor(private trackedTeamsService: TrackedTeamsService) {}

  ngOnInit() {
    this.trackedTeams$ = this.trackedTeamsService.getTrackedTeams();
  }

  setDisplayedDays(displayedDays: number): void {
    this.displayedDays = displayedDays;
  }
}
