import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  //.
  url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getRandomCharacter() {
    const id = Math.floor(Math.random() * 670) + 1;
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
