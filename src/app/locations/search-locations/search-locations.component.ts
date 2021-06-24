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
  residentsArray = [];
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((data: any) => {
      this.locationArray = data.results;
    });
  }
}
