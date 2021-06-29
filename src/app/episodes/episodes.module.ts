import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { MainEpisodesComponent } from './main-episodes/main-episodes.component';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';


@NgModule({
  declarations: [
    MainEpisodesComponent,
    ListEpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
