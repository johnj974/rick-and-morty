import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpisodeInterface } from '../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  //.
  constructor(private http: HttpClient) { }

  getRandomEpisode(){
    const randomNumber = Math.floor(Math.random() * 41) + 1;
    return this.http.get<EpisodeInterface>(`https://rickandmortyapi.com/api/episode/${randomNumber}`);
  }


}
