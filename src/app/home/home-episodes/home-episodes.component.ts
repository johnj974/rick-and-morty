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
  singleEpisode: EpisodeInterface;
  singleCharacter: CharacterInterface;
  constructor(
    private episodeService: EpisodesService,
    private chracterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.episodeService.getRandomEpisode().subscribe((returnedEpisode) => {
      this.singleEpisode = returnedEpisode;
    });

    this.chracterService
      .getSpecificCharacter(1)
      .subscribe((returnedCharacter) => {
        this.singleCharacter = returnedCharacter;
      });
  }
}
