import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationInterface } from '../interfaces/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  //.
  url = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  // getRandomLocation() {
  //   const id = 44;
  //   return this.http.get<LocationInterface>(`${this.url}/location/${id}`);
  // }
  getRandomLocation() {
    const id = Math.floor(Math.random() * 108) + 1;
    return this.http.get<LocationInterface>(`${this.url}/location/${id}`);
  }
}
//73 for no 1 resident
//44 for multiple residents
//95 for no residents
//63 check this 22/6/21
