import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCharactersComponent } from './main-characters/main-characters.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

const routes: Routes = [
  { path: '', component: MainCharactersComponent },
  { path: ':character/:id', component: SingleCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
