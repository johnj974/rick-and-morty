import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { MainLocationsComponent } from './main-locations/main-locations.component';
import { SearchLocationsComponent } from './search-locations/search-locations.component';


@NgModule({
  declarations: [
    MainLocationsComponent,
    SearchLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
