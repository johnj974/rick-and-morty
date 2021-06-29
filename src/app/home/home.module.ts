import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeCharactersComponent } from './home-characters/home-characters.component';

import { HomeEpisodesComponent } from './home-episodes/home-episodes.component';
import { HomeLocationComponent } from './home-location/home-location.component';

@NgModule({
  declarations: [
    MainHomeComponent,
    HomeCharactersComponent,

    HomeEpisodesComponent,
    HomeLocationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
