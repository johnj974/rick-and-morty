import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeCharactersComponent } from './home-characters/home-characters.component';
import { HomeLocationsComponent } from './home-locations/home-locations.component';
import { HomeEpisodesComponent } from './home-episodes/home-episodes.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    HomeCharactersComponent,
    HomeLocationsComponent,
    HomeEpisodesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
