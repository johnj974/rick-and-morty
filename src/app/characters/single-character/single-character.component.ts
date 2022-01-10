import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CharacterInterface } from 'src/app/shared/interfaces/character';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { CharacterService } from 'src/app/shared/services/character.service';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
})
export class SingleCharacterComponent implements OnInit {
  //.

  character: CharacterInterface = {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2',
    },
    location: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    episode: ['https://'],
    url: 'https://rickandmortyapi.com/api/character/6',
    created: '2017-11-04T19:50:28.250Z',
  };
  retrievedEpisodeArray = [];
  singleEpisode;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private episodeService: EpisodesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.characterService
        .getSpecificCharacter(data.id)
        .subscribe((characterData) => {
          this.character = characterData;
          //console.log(this.character);
          this.retrieveEpisode();
        });
    });
  }

  retrieveEpisode() {
    const episodeArray = this.character.episode;
    const searchArray = [];
    for (let address of episodeArray) {
      let url = address;
      let lastInstance = url.lastIndexOf('/');
      let number = url.slice(lastInstance + 1);
      searchArray.push(number);
    }
    //console.log(searchArray);
    if (searchArray.length === 1) {
      this.episodeService.getEpisode(searchArray).subscribe((data) => {
        this.singleEpisode = data;
      });
    } else {
      this.episodeService.getEpisode(searchArray).subscribe((data: any) => {
        this.retrievedEpisodeArray = data;
        //console.log(this.retrievedEpisodeArray);
      });
    }
  }

  toEpisode(name, id) {
    const episodeName = name.replace(/ /g, '');
    this.router.navigate(['episodes', episodeName, id]);
  }
}
