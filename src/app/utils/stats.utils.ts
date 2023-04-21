import { GameInterface } from "@interfaces/game.interface";
import { TeamInterface } from "@interfaces/team.interface";
import { StatsModel } from "@models/stats.class";

export class StatsUtils {

    getStatsFromGames(games: GameInterface[], team: TeamInterface): StatsModel {
      const globalStats: StatsModel = new StatsModel();

      games.forEach(game=> this.addGameStats(game, team, globalStats));
      globalStats.averagePointsScored = Math.round(globalStats.averagePointsScored / games.length);
      globalStats.averagePointsConceded = Math.round(globalStats.averagePointsConceded / games.length);

      return globalStats;
    }

    private addGameStats(game: GameInterface, team: TeamInterface, globalStats: StatsModel): void {
        const singleGameStats = this.getSingleGameStats(team, game);
        globalStats.wins += singleGameStats.wins;
        globalStats.losses += singleGameStats.losses;
        globalStats.averagePointsConceded += singleGameStats.averagePointsConceded;
        globalStats.averagePointsScored += singleGameStats.averagePointsScored;
        globalStats.lastGamesWon.push(Boolean(singleGameStats.wins));
    }

    private getSingleGameStats(team: TeamInterface, game: GameInterface): StatsModel {
      const stats: StatsModel = new StatsModel();
      const {visitor_team_score: visitorScore, home_team_score: homeScore} = game;

      if (game.home_team.id === team.id) {
        this.addSingleGameStats(homeScore, visitorScore, stats)
      }
      if (game.visitor_team.id === team.id) {
        this.addSingleGameStats(visitorScore, homeScore, stats)
      }

      return stats;
    }

    private addSingleGameStats(teamScore: number, rivalScore: number, stats: StatsModel): void {
      stats.averagePointsScored = teamScore;
      stats.averagePointsConceded = rivalScore;

      if (teamScore > rivalScore) {
        stats.wins = 1;
      } else {
        stats.losses = 1;
      }
    }
}