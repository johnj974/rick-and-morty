import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-single-episode',
  templateUrl: './single-episode.component.html',
  styleUrls: ['./single-episode.component.css'],
})
export class SingleEpisodeComponent implements OnInit {
  //.
  episodeId: number;
  episode: EpisodeInterface;

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      console.log(data.id);
      this.episodeId = data.id;
    });
    this.episodesService
      .getEpisode(this.episodeId)
      .subscribe((data: EpisodeInterface) => {
        console.log(data);
        this.episode = data;
      });
  }
}
