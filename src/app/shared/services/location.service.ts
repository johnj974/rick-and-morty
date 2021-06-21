import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  //.
  url = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getRandomLocation() {
    const id = 90;
    return this.http.get(`${this.url}/location/${id}`);
  }
  // getRandomLocation() {
  //   const id = Math.floor(Math.random() * 108) + 1;
  //   return this.http.get(`${this.url}/location/${id}`);
  // }
}
