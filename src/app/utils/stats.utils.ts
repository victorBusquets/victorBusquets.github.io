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
        globalStats.lastGames.push(singleGameStats.wins ? 'W' : 'L');
    }

    private getSingleGameStats(team: TeamInterface, game: GameInterface): StatsModel {
        const stats: StatsModel = new StatsModel();
        
        if (game.home_team.id === team.id) {
          stats.averagePointsScored = game.home_team_score;
          stats.averagePointsConceded = game.visitor_team_score;
          if (game.home_team_score > game.visitor_team_score) {
            stats.wins +=1;
          } else {
            stats.losses += 1;
          }
        }
        if (game.visitor_team.id === team.id) {
          stats.averagePointsScored = game.visitor_team_score;
          stats.averagePointsConceded = game.home_team_score;
          if (game.visitor_team_score > game.home_team_score) {
            stats.wins = 1;
          } else {
            stats.losses = 1;
          }
        }

        
        return stats;
      }
}