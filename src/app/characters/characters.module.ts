import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCharactersComponent } from './main-characters/main-characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';

@NgModule({
  declarations: [MainCharactersComponent, ListCharactersComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
