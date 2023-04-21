import {Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import { DialogComponent } from '@components/dialog/dialog.component';
import { SubscriptionsBaseComponent } from '@components/subscriptions-base/subscriptions-base.component';
import { TRACK_BY_INDEX } from '@constants/track-by-index.const';
import { TeamInterface } from '@interfaces/team.interface';
import { StatsModel } from '@models/stats.class';
import { NbaService } from '@services/nba.service';
import { TrackedTeamsService } from '@services/tracked-teams.service';
import { takeUntil } from 'rxjs';
import { APP_ROUTE_FRAGMENTS } from 'src/app/constants/app-routes.const';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent extends SubscriptionsBaseComponent implements OnChanges {
  @ViewChild("confirmDialog", { static: true }) confirmDialog!: DialogComponent;
  @Input() displayedDays!: number;
  @Input() team!: TeamInterface;
  stats!: StatsModel | null;
  teamLogo!: string;
  appRoutes = APP_ROUTE_FRAGMENTS;
  trackByIndex = TRACK_BY_INDEX;

  constructor(private nbaService: NbaService, private trackedTeamsService: TrackedTeamsService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const teamChange: SimpleChange = changes['team'];
    const team: TeamInterface | undefined = teamChange?.currentValue;
    const displayedDaysChange: SimpleChange = changes['displayedDays'];
    const displayedDays: number | undefined = displayedDaysChange?.currentValue;

    if(team) {
      this.setTeamLogo();
    }
    if(displayedDays) {
      this.getLastResultsStats();
    }
  }

  removeTrackedTeam(team: TeamInterface): void {
    this.trackedTeamsService.removeTrackedTeam(team);
  }

  showModal(): void {
    this.confirmDialog.showModal()
  }

  closeModal(): void {
    this.confirmDialog.closeModal();
  }

  private setTeamLogo(): void {
    this.teamLogo = `https://interstate21.com/nba-logos/${this.team.abbreviation}.png`;
  }

  private getLastResultsStats(): void {
    this.stats = null;
    this.nbaService
      .getLastResultsStats(this.team, this.displayedDays)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((stats)=>this.stats = stats);
  }
}
