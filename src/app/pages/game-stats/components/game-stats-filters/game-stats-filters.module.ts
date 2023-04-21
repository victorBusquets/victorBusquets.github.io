import { NgModule } from "@angular/core";
import { GameStatsFiltersComponent } from "./game-stats-filters.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [GameStatsFiltersComponent],
    exports: [GameStatsFiltersComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class GameStatsFiltersModule { }
