import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionsBaseComponent } from '@components/subscriptions-base/subscriptions-base.component';
import { DEFAULT_DISPLAYED_DAYS, DISPLAYED_DAYS_OPTIONS } from '@constants/displayed-days.const';
import { TRACK_BY_INDEX } from '@constants/track-by-index.const';
import { ConferenceInterface } from '@interfaces/conference.interface';
import { DivisionInterface } from '@interfaces/division.interface';
import { GameStatsFilterInterface } from '@interfaces/game-stats-filter.interface';
import { TeamInterface } from '@interfaces/team.interface';
import { NbaService } from '@services/nba.service';
import { TrackedTeamsService } from '@services/tracked-teams.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-game-stats-filters',
  templateUrl: './game-stats-filters.component.html',
  styleUrls: ['./game-stats-filters.component.css']
})
export class GameStatsFiltersComponent extends SubscriptionsBaseComponent {
  @Output() displayedDaysChanged: EventEmitter<number> = new EventEmitter();
  filtersForm = new FormGroup({
    conference: new FormControl(''),
    division: new FormControl(''),
    team: new FormControl(0, Validators.required),
    displayedDays: new FormControl(DEFAULT_DISPLAYED_DAYS)
  });
  conferences!: ConferenceInterface[];
  divisions!: DivisionInterface[];
  teams!: TeamInterface[];
  displayDayOptions: number[] = DISPLAYED_DAYS_OPTIONS;
  trackByIndex = TRACK_BY_INDEX;

  constructor(private nbaService: NbaService, private trackedTeamsService: TrackedTeamsService) {
    super();
  }

  ngOnInit() {
    this.getInitialOptions();
    this.listenFormEvents();
  }

  trackTeam(): void {
    const {team: teamId} = this.filtersForm.value;
    const selectedTeam: TeamInterface | undefined = this.teams.find(team => team.id == Number(teamId));

    if (selectedTeam){
      this.trackedTeamsService.addTrackedTeam(selectedTeam);
    }
  }

  clearFilters(): void {
    this.setFormValue({conference: '', division: '', displayedDays: DEFAULT_DISPLAYED_DAYS}, true);
    this.getInitialOptions();
  }

  private getInitialOptions(): void {
    this.getConferences();
    this.getDivisions();
    this.getTeams();
  }

  private listenFormEvents(): void {
    this.filtersForm.get('conference')?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((conference)=>this.conferenceSelected(conference));

    this.filtersForm.get('division')?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((division)=>this.divisionSelected(division));

    this.filtersForm.get('displayedDays')?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((displayedDays)=>this.displayedDaysChanged.emit(displayedDays as number));
  }

  private conferenceSelected(selectedConference: string | null): void {
    this.setFormValue({division: ''});
    this.getDivisions(selectedConference);
    this.getTeams(selectedConference);
  }

  private divisionSelected(selectedDivision: string | null): void {
    const {conference} = this.filtersForm.value;
    this.getTeams(conference, selectedDivision);
  }

  private setFormValue(newFormValue: GameStatsFilterInterface, emitEvent: boolean = false): void {
    this.filtersForm.patchValue(newFormValue, {emitEvent});
  }

  private getConferences(): void {
    this.conferences = this.nbaService.getConferences();
  }

  private getDivisions(selectedConference?: string | null): void {
    this.divisions = this.nbaService.getDivisisions(selectedConference);
  }

  private getTeams(selectedConference?: string | null, selectedDivision?: string | null): void {
    this.nbaService.getTeams(selectedConference, selectedDivision)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((teams)=> {
        this.teams = teams;
        this.selectFirstTeamOption();
      });
  }

  private selectFirstTeamOption(): void{
    const firstTeamId: number = this.teams[0].id;
    this.setFormValue({team: firstTeamId});
  }
}
