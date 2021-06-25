import { Component, OnInit } from '@angular/core';
import { LocationInterface } from 'src/app/shared/interfaces/location';
import { CharacterService } from 'src/app/shared/services/character.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-search-locations',
  templateUrl: './search-locations.component.html',
  styleUrls: ['./search-locations.component.css'],
})
export class SearchLocationsComponent implements OnInit {
  //.

  locationArray: LocationInterface[] = [];
  retrievedResidents = [];

  constructor(
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((data: any) => {
      this.locationArray = data.results;
    });
  }

  check(location) {
    const residentArray = location.residents;
    const searchArray = [];
    for (let address of residentArray) {
      let url = address;
      let lastInstance = url.lastIndexOf('/');
      let number = url.slice(lastInstance + 1);
      searchArray.push(number);
    }
    console.log(searchArray);
    this.characterService
      .getMultipleCharacters(searchArray)
      .subscribe((data: any) => {
        this.retrievedResidents = data;
        console.log(this.retrievedResidents);
      });
  }
}
