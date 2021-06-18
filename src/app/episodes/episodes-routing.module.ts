import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEpisodesComponent } from './main-episodes/main-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: MainEpisodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
