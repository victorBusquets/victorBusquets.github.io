import { ResultType } from "../types/result.type";

export class StatsModel {
    wins: number = 0;
    losses: number = 0;
    averagePointsScored: number = 0;
    averagePointsConceded: number = 0;
    lastGames: ResultType[] = [];
}