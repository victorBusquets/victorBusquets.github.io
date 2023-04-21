import { StatsModel } from "./stats.class";

describe('StatsModel', () => {
    let stats: StatsModel;
  
    beforeEach(() => {
      stats = new StatsModel();
    });
  
    it('should have default values', () => {
      expect(stats.wins).toBe(0);
      expect(stats.losses).toBe(0);
      expect(stats.averagePointsScored).toBe(0);
      expect(stats.averagePointsConceded).toBe(0);
      expect(stats.lastGamesWon).toEqual([]);
    });
  
    it('should update properties correctly', () => {
      stats.wins = 10;
      stats.losses = 5;
      stats.averagePointsScored = 20.5;
      stats.averagePointsConceded = 15.2;
      stats.lastGamesWon = [true, false, true];
  
      expect(stats.wins).toBe(10);
      expect(stats.losses).toBe(5);
      expect(stats.averagePointsScored).toBe(20.5);
      expect(stats.averagePointsConceded).toBe(15.2);
      expect(stats.lastGamesWon).toEqual([true, false, true]);
    });
});