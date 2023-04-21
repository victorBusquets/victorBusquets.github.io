import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { TeamInterface } from '@interfaces/team.interface';
import { GameInterface } from '@interfaces/game.interface';
import { MetaResponse } from '@interfaces/meta-response.interface';
import { API_ROUTES } from '@constants/api-routes.const';
import { DateUtils } from '@utils/date.utils';
import { DivisionInterface } from '@interfaces/division.interface';
import { DIVISION_OPTIONS } from '@constants/division.const';
import { CONFERENCE_OPTIONS } from '@constants/conference.const';
import { ConferenceInterface } from '@interfaces/conference.interface';
import { StatsUtils } from '@utils/stats.utils';
import { StatsModel } from '@models/stats.class';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private dateUtils = new DateUtils();
  private statUtils = new StatsUtils();
  private teams$!: BehaviorSubject<TeamInterface[] | null>;
  private conferences: ConferenceInterface[] = CONFERENCE_OPTIONS;
  private divisions: DivisionInterface[] = DIVISION_OPTIONS;

  constructor(private httpClient: HttpClient) { }

  getTeams(selectedConference?: string | null, selectedDivision?: string | null): Observable<TeamInterface[]> {
    const firstRequest: boolean = !this.teams$;
    this.teams$ = this.teams$ || new BehaviorSubject<TeamInterface[] | null>(null);

    return firstRequest ?
      this.getAllTeams() :
      this.filterTeams(selectedConference, selectedDivision);
  }

  getTeamById(id: string): Observable<TeamInterface> {
    return this.httpClient.get<TeamInterface>(`${API_ROUTES.getTeams}/${id}`);
  }

  getLastResults(team: TeamInterface, numberOfDays: number ): Observable<GameInterface[]> {
    const previousDays: string[] = this.dateUtils.getPreviousDays(numberOfDays);
    let params: HttpParams = new HttpParams({
      fromObject: {
        'dates': previousDays
      }
    });
    params = params.append('page', 0);
    params = params.append('per_page', numberOfDays);
    params = params.append('team_ids', team.id);

    return this.httpClient.get<MetaResponse<GameInterface>>(API_ROUTES.getGames, {params})
      .pipe(map(res => res.data));
  }

  getLastResultsStats(team: TeamInterface, numberOfDays: number): Observable<StatsModel> {
    return this.getLastResults(team, numberOfDays)
      .pipe(map(data => this.statUtils.getStatsFromGames(data, team)));
  }

  getConferences(): ConferenceInterface[] {
    return this.conferences;
  }

  getDivisisions(selectedConference?: string | null): DivisionInterface[] {
    return this.divisions.filter((division)=> !selectedConference || division.conference === selectedConference);
  }

  private getAllTeams(): Observable<TeamInterface[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', 0);

    return this.httpClient.get<MetaResponse<TeamInterface>>(API_ROUTES.getTeams, {params})
      .pipe(
        map(res => res.data),
        tap(data=> this.teams$.next(data))
      )
  }

  private filterTeams(selectedConference?: string | null, selectedDivision?: string | null): Observable<TeamInterface[]> {
    return this.teams$
      .pipe(
        map((data)=> data?.filter(team => 
          (!selectedConference || team.conference == selectedConference) &&
          (!selectedDivision || team.division == selectedDivision)
        ))
      ) as Observable<TeamInterface[]>;
  }
}
