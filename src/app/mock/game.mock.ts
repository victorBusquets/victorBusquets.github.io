import { GameInterface } from "@interfaces/game.interface";
import { TEAM_MOCK } from "./team.mock";

export const GAME_MOCK: GameInterface = {
    id: 0,
    date: new Date(),
    home_team: TEAM_MOCK,
    home_team_score: 0,
    period: 0,
    postseason: true,
    season: 0,
    status: '',
    time: '',
    visitor_team: TEAM_MOCK,
    visitor_team_score: 0
}