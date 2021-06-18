import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCharactersComponent } from './main-characters/main-characters.component';

const routes: Routes = [{ path: '', component: MainCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
