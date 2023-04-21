import { NgModule } from "@angular/core";
import { GameStatsComponent } from "./components/game-stats/game-stats.component";
import { GameStatsRoutingModule } from "./game-stats-routing.module";
import { CommonModule } from "@angular/common";
import { TeamStatsModule } from "./components/team-stats/team-stats.module";
import { GameStatsFiltersModule } from "./components/game-stats-filters/game-stats-filters.module";

@NgModule({
    declarations: [GameStatsComponent],
    imports: [CommonModule, TeamStatsModule, GameStatsFiltersModule, GameStatsRoutingModule]
})
export class GameStatsModule { }
