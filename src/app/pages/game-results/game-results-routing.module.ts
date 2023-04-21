import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from "./components/game-results/game-results.component";

const routes: Routes = [
  {
    path: '',
    component: GameResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameResultsRoutingModule {}
