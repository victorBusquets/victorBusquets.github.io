import { NgModule } from "@angular/core";
import { GameResultsComponent } from "./components/game-results/game-results.component";
import { GameResultsRoutingModule } from "./game-results-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SpinnerModule } from "@components/spinner/spinner.module";

@NgModule({
    declarations: [GameResultsComponent],
    imports: [CommonModule, RouterModule, GameResultsRoutingModule, SpinnerModule]
})
export class GameResultsModule { }
