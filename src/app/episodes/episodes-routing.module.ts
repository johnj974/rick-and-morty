import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEpisodesComponent } from './main-episodes/main-episodes.component';
import { SingleEpisodeComponent } from './single-episode/single-episode.component';

const routes: Routes = [
  {
    path: '',
    component: MainEpisodesComponent,
  },
  {
    path: ':episodeName/:id',
    component: SingleEpisodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
