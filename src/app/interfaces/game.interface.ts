import { TeamInterface } from "./team.interface";

export interface GameInterface {
    id: number;
    date: Date;
    home_team: TeamInterface;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: TeamInterface;
    visitor_team_score: number;
}
  