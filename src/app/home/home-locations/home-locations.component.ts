import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { LocationInterface } from 'src/app/shared/interfaces/location';
import { CharacterService } from 'src/app/shared/services/character.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-home-locations',
  templateUrl: './home-locations.component.html',
  styleUrls: ['./home-locations.component.css'],
})
export class HomeLocationsComponent implements OnInit {
  //.
  location: LocationInterface;
  residentsArray: string[] = [];
  searchArray = [];
  retrievedResidents = [];
  constructor(
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.locationService
      .getRandomLocation()
      .subscribe((data: LocationInterface) => {
        this.location = data;
        console.log(this.location);
        this.residentsArray = data.residents;
        this.reduceString(this.residentsArray);
      });
  }

  reduceString(array) {
    for (let address of array) {
      let url = address;
      const lastInstance = url.lastIndexOf('/');
      const number = url.slice(lastInstance + 1);
      this.searchArray.push(number);
    }
    this.characterService
      .getMultipleCharacters(this.searchArray)
      .subscribe((data: any) => {
        this.retrievedResidents = data;
      });
  }
}

//"https://rickandmortyapi.com/api/character/174"

// const url = 'https://rickandmortyapi.com/api/character/174';
//     const lastInstance = url.lastIndexOf('/');
//     const number = url.slice(lastInstance + 1);
//     console.log(number);
