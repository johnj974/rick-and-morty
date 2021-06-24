import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { LocationInterface } from 'src/app/shared/interfaces/location';
import { CharacterService } from 'src/app/shared/services/character.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrls: ['./home-location.component.css'],
})
export class HomeLocationComponent implements OnInit {
  //.
  katarina = {
    name: 'katarina',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };
  retrievedResidents: CharacterInterface[] = [];
  location = {
    name: 'Jerryboree',
    type: 'Daycare',
    dimension: 'unknown',
    residents: [],
  };
  constructor(
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterService.getSpecificCharacter(662).subscribe((character) => {
      this.katarina = character;
    });
    this.locationService.getRandomLocation().subscribe((retrievedLocation) => {
      this.location = retrievedLocation;
      console.log(this.location);
    });
  }
}
