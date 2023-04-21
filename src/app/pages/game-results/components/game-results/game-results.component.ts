import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, takeUntil} from 'rxjs';
import { NbaService } from '@services/nba.service';
import { GameInterface } from '@interfaces/game.interface';
import { TeamInterface } from '@interfaces/team.interface';
import { APP_ROUTE_FRAGMENTS } from 'src/app/constants/app-routes.const';
import { SubscriptionsBaseComponent } from '@components/subscriptions-base/subscriptions-base.component';
import { TRACK_BY_INDEX } from '@constants/track-by-index.const';
import { DEFAULT_DISPLAYED_DAYS } from '@constants/displayed-days.const';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent extends SubscriptionsBaseComponent {
  team?: TeamInterface;
  games$?: Observable<GameInterface[]>;
  appRoutes = APP_ROUTE_FRAGMENTS;
  displayedDays: number = DEFAULT_DISPLAYED_DAYS;
  trackByIndex = TRACK_BY_INDEX;

  constructor(private activatedRoute: ActivatedRoute, private nbaService: NbaService) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(paramMap => {
        const displayedDays = paramMap.get("days") as string;
        const teamId = paramMap.get("teamId") as string;

        if (displayedDays) {
          this.displayedDays = +displayedDays;
        }
        this.getTeamDetail(teamId);      
      });
  }

  private getTeamDetail(teamId: string): void {
    this.nbaService.getTeamById(teamId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((team)=>{
        if (team){
          this.team = team;
          this.games$ = this.nbaService.getLastResults(this.team, this.displayedDays);
        }
      }); 
  }
}
