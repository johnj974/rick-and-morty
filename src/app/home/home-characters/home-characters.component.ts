import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-home-characters',
  templateUrl: './home-characters.component.html',
  styleUrls: ['./home-characters.component.css'],
})
export class HomeCharactersComponent implements OnInit {
  //.
  character;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getRandomCharacter()
      .subscribe((data: CharacterInterface) => {
        this.character = data;
        console.log(this.character.name);
      });
  }
}
