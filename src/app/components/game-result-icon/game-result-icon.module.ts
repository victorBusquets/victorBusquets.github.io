import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameResultIconComponent } from "./game-result-icon.component";

@NgModule({
    declarations: [GameResultIconComponent],
    exports: [GameResultIconComponent],
    imports: [CommonModule]
})
export class GameResultIconModule { }
