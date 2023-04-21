import { NgModule } from "@angular/core";
import { TeamStatsComponent } from "./team-stats.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DialogModule } from "@components/dialog/dialog.module";
import { SpinnerModule } from "@components/spinner/spinner.module";

@NgModule({
    declarations: [TeamStatsComponent],
    exports: [TeamStatsComponent],
    imports: [RouterModule, CommonModule, DialogModule, SpinnerModule]
})
export class TeamStatsModule { }
