import { Component, OnInit } from '@angular/core';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.css'],
})
export class ListEpisodesComponent implements OnInit {
  //.
  episodesArray: EpisodeInterface[] = [];
  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.episodesService.getAllEpisodes().subscribe((episodes: any) => {
      this.episodesArray = episodes.results;
      console.log(this.episodesArray);
    });
  }
}
