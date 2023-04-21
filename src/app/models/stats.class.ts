export class StatsModel {
    wins: number;
    losses: number;
    averagePointsScored: number;
    averagePointsConceded: number;
    lastGamesWon: boolean[];

    constructor(stats?: Partial<StatsModel>) {
        this.wins = stats?.wins || 0;
        this.losses = stats?.losses || 0;
        this.averagePointsScored = stats?.averagePointsScored || 0;
        this.averagePointsConceded = stats?.averagePointsConceded || 0;
        this.lastGamesWon = stats?.lastGamesWon || [];
    }
}