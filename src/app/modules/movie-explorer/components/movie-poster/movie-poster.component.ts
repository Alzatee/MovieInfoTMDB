import { Component, Input } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';
import { Movie } from '@core/models/interface/movies.interface';
import { UtilService } from '@shared/util/util.service';

@Component({
  selector: 'gml-movie-poster',
  standalone: false,
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.scss'
})
export class MoviePosterComponent {
  appTexts = AppTexts;
  @Input() movies?: Movie[];

  constructor(public utilService: UtilService) {}

  onMovieClick(movie: Movie) {
    this.utilService.viewDetailMovie(movie);
  }

}
