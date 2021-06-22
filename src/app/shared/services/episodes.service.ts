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
    return this.http.get<EpisodeInterface>("https://rickandmortyapi.com/api/episode/28");
  }


}
