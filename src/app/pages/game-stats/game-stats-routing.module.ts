import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStatsComponent } from './components/game-stats/game-stats.component';

const routes: Routes = [
  {
    path: '',
    component: GameStatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameStatsRoutingModule {}
