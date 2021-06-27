import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLocationsComponent } from './main-locations/main-locations.component';
import { SingleLocationsComponent } from './single-locations/single-locations.component';

const routes: Routes = [
  {
    path: '',
    component: MainLocationsComponent,
  },
  {
    path: ':location/:id',
    component: SingleLocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
