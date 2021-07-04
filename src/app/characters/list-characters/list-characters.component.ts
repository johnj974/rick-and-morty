import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent implements OnInit {
  //.
  retrievedCharacterArray = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      this.retrievedCharacterArray = data.results;
    });
  }
}
