import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCharactersComponent } from './main-characters/main-characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

@NgModule({
  declarations: [MainCharactersComponent, ListCharactersComponent, SingleCharacterComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
