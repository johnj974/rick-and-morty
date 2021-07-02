import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';

import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-home-characters',
  templateUrl: './home-characters.component.html',
  styleUrls: ['./home-characters.component.css'],
})
export class HomeCharactersComponent implements OnInit {
  //.
  character = {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: { name: 'Earth' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getRandomCharacter()
      .subscribe((data: CharacterInterface) => {
        this.character = data;
      });
  }
}
