import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeInterface } from 'src/app/shared/interfaces/episode';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.css'],
})
export class ListEpisodesComponent implements OnInit {
  //.
  numberArray: string[] = ['one', 'two', 'three'];
  episodesArray: EpisodeInterface[] = [];
  constructor(
    private episodesService: EpisodesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.episodesService.getAllEpisodes().subscribe((episodes: any) => {
      this.episodesArray = episodes.results;
      //console.log(this.episodesArray);
    });
  }

  toEpisode(episodeName, id) {
    const episodeId = id + 1;
    //console.log(id + 1);
    this.router.navigate([episodeName, episodeId], { relativeTo: this.route });
  }

  nextEpisodePage(id: number) {
    const pageId = id + 1;
    this.episodesService.getEpisodesPage(pageId).subscribe((episodes: any) => {
      this.episodesArray = episodes.results;
    });
  }
}
