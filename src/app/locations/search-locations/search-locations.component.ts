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

  selectSingleLocation(location, id) {
    console.log(location);
    console.log(id);
    const locationName = location.replace(/ /g, '');
    this.router.navigate([locationName, id], { relativeTo: this.route });
  }
}
