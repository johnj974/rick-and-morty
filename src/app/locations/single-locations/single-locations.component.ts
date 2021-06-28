import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { LocationInterface } from 'src/app/shared/interfaces/location';
import { CharacterService } from 'src/app/shared/services/character.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-single-locations',
  templateUrl: './single-locations.component.html',
  styleUrls: ['./single-locations.component.css'],
})
export class SingleLocationsComponent implements OnInit {
  //.
  planet = {
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

  locationId;
  constructor(
    private locationService: LocationService,
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.locationService
        .getSingleLocation(params.id)
        .subscribe((retrievedLocation) => {
          this.location = retrievedLocation;
          //console.log(this.location.residents);
          this.locationId = params.id;
          this.check(this.location);
        });
    });
    this.characterService.getSpecificCharacter(662).subscribe((character) => {
      this.planet = character;
    });
  }

  check(location) {
    const residentArray = this.location.residents;
    const searchArray = [];
    for (let address of residentArray) {
      let url = address;
      let lastInstance = url.lastIndexOf('/');
      let number = url.slice(lastInstance + 1);
      searchArray.push(number);
    }
    //console.log(searchArray);
    this.characterService
      .getMultipleCharacters(searchArray)
      .subscribe((data: any) => {
        this.retrievedResidents = data;
        console.log(this.retrievedResidents);
      });
  }
}
