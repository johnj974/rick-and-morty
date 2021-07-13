import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { CharacterService } from 'src/app/shared/services/character.service';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-home-episodes',
  templateUrl: './home-episodes.component.html',
  styleUrls: ['./home-episodes.component.css'],
})
export class HomeEpisodesComponent implements OnInit {
  //.
  singleEpisode: EpisodeInterface = {
    id: 30,
    name: "The ABC's of Beth",
    air_date: 'September 24, 2017',
    episode: 'S03E09',
    characters: [],
    url: 'https://rickandmortyapi.com/api/episode/30',
    created: '2017',
  };
  singleCharacter = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  constructor(
    private episodeService: EpisodesService,
    private chracterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.episodeService.getRandomEpisode().subscribe((returnedEpisode) => {
      this.singleEpisode = returnedEpisode;
      //console.log(this.singleEpisode);
    });

    this.chracterService
      .getSpecificCharacter(1)
      .subscribe((returnedCharacter) => {
        this.singleCharacter = returnedCharacter;
      });
  }
}
