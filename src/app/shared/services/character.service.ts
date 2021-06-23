import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  //.
  url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getRandomCharacter() {
    const id = Math.floor(Math.random() * 670) + 1;
    return this.http.get<CharacterInterface>(`${this.url}/character/${id}`);
  }

  getMultipleCharacters(array) {
    return this.http.get<CharacterInterface>(`${this.url}/character/${array}`);
  }

  getSpecificCharacter(id: number) {
    return this.http.get<CharacterInterface>(`${this.url}/character/${id}`);
  }
}

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
