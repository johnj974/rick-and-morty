import { Component, OnInit } from '@angular/core';

import { LocationInterface } from 'src/app/shared/interfaces/location';

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

  constructor(private locationService: LocationService) {}

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
}
