import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  numberArray: string[] = ['one', 'two', 'three', 'four', 'five', 'six'];

  constructor(
    private locationService: LocationService,
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((data: any) => {
      this.locationArray = data.results;
    });
  }

  nextPage(id: number) {
    const pageNumber = id + 1;
    this.locationService.getLocationPage(pageNumber).subscribe((data: any) => {
      this.locationArray = data.results;
    });
  }

  // GENERATES A RANDOM CHARACTER IMAGE FOR USE IN THE IMG ELEMENT
  // randomCharacter() {
  //   const randomImageId = Math.floor(Math.random() * 671) + 1;
  //   return `https://rickandmortyapi.com/api/character/avatar/${randomImageId}.jpeg`;
  // }
}
