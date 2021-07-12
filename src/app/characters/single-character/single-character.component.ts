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

  character: CharacterInterface;
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
    this.router.navigate(['episodes', name, id]);
  }
}
