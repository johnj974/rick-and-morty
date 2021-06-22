import { Component, OnInit } from '@angular/core';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-home-episodes',
  templateUrl: './home-episodes.component.html',
  styleUrls: ['./home-episodes.component.css']
})
export class HomeEpisodesComponent implements OnInit {
  //.
  singleEpisode: EpisodeInterface;
  constructor(private episodeService: EpisodesService) { }

  ngOnInit(): void {
    this.episodeService.getRandomEpisode().subscribe((returnedEpisode)=>{
      this.singleEpisode = returnedEpisode;
    })
  }

}
