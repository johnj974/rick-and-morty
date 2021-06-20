import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-home-characters',
  templateUrl: './home-characters.component.html',
  styleUrls: ['./home-characters.component.css'],
})
export class HomeCharactersComponent implements OnInit {
  //.

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getRandomCharacter().subscribe((data) => {
      console.log(data);
    });
  }
}
