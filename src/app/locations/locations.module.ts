import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { MainLocationsComponent } from './main-locations/main-locations.component';
import { SearchLocationsComponent } from './search-locations/search-locations.component';
import { SingleLocationsComponent } from './single-locations/single-locations.component';


@NgModule({
  declarations: [
    MainLocationsComponent,
    SearchLocationsComponent,
    SingleLocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
