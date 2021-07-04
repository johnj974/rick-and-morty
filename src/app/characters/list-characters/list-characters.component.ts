import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent implements OnInit {
  //.
  retrievedCharacterArray = [];

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      this.retrievedCharacterArray = data.results;
    });
  }

  toCharacterInfo(character: string, id: number) {
    const characterId = id + 1;
    const characterName = character.replace(/ /g, '');
    this.router.navigate([characterName, characterId], {
      relativeTo: this.route,
    });
  }
}
