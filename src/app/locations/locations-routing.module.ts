import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLocationsComponent } from './main-locations/main-locations.component';

const routes: Routes = [
  {
    path: '',
    component: MainLocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
