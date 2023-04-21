import { StatsModel } from "@models/stats.class";

export const STATS_MOCK: StatsModel = new StatsModel({
    wins: 0,
    losses: 0,
    averagePointsScored: 0,
    averagePointsConceded: 0,
    lastGamesWon: [true, false]
});
export const EXPECTED_STATS_MOCK: StatsModel = new StatsModel({
    wins: 0,
    losses: 1,
    averagePointsScored: 0,
    averagePointsConceded: 0,
    lastGamesWon: [false]
});

