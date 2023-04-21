import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTE_FRAGMENTS, APP_ROUTE_IDS } from './constants/app-routes.const';


const routes: Routes = [{
    path: APP_ROUTE_FRAGMENTS.stats,
    loadChildren: () => import('./pages/game-stats/game-stats.module').then((m) => m.GameStatsModule),
  }, {
    path: `${APP_ROUTE_FRAGMENTS.results}/${APP_ROUTE_IDS.teamId}`,
    loadChildren: () => import('./pages/game-results/game-results.module').then((m) => m.GameResultsModule),
  }, {
    path: `${APP_ROUTE_FRAGMENTS.results}/${APP_ROUTE_IDS.teamId}/${APP_ROUTE_FRAGMENTS.days}/${APP_ROUTE_IDS.days}`,
    loadChildren: () => import('./pages/game-results/game-results.module').then((m) => m.GameResultsModule),
  }, {
    path: "**",
    redirectTo: APP_ROUTE_FRAGMENTS.stats
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
