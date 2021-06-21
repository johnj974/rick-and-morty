import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { LocationInterface } from 'src/app/shared/interfaces/location';
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
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService
      .getRandomLocation()
      .subscribe((data: LocationInterface) => {
        this.location = data;
        this.residentsArray = data.residents;
        console.log(data);
        console.log(data.residents);
      });
  }
}
