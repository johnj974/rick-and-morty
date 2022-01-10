import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { CharacterService } from 'src/app/shared/services/character.service';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-single-episode',
  templateUrl: './single-episode.component.html',
  styleUrls: ['./single-episode.component.css'],
})
export class SingleEpisodeComponent implements OnInit {
  episodeId: number;

  episode: EpisodeInterface = {
    id: 20,
    name: "Look Who's Purging Now",
    air_date: 'September 27, 2015',
    episode: 'S02E09',
    characters: ['https://rickandmortyapi.com/api/character/1'],
    url: 'https://rickandmortyapi.com/api/episode/20',
    created: '2017-11-10T12:56:35.772Z',
  };
  retrievedCharacterArray: CharacterInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService,
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      //console.log(data.id);
      this.episodeId = data.id;
    });
    this.episodesService
      .getEpisode(this.episodeId)
      .subscribe((data: EpisodeInterface) => {
        //console.log(data);
        this.episode = data;
        this.retrieveCharacters(this.episode);
      });
  }

  retrieveCharacters(episode) {
    const characterArray = this.episode.characters;
    const searchArray = [];
    for (let address of characterArray) {
      let url = address;
      let lastInstance = url.lastIndexOf('/');
      let number = url.slice(lastInstance + 1);
      searchArray.push(number);
    }
    //console.log(searchArray);
    this.characterService
      .getMultipleCharacters(searchArray)
      .subscribe((data: any) => {
        this.retrievedCharacterArray = data;
        //console.log(this.retrievedCharacterArray);
      });
  }

  toCharacter(character, id) {
    const characterName = character.replace(/ /g, '');
    const characterId = id;
    this.router.navigate(['characters', characterName, characterId]);
  }
}
