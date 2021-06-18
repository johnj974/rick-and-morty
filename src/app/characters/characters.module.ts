import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCharactersComponent } from './main-characters/main-characters.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [MainCharactersComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
