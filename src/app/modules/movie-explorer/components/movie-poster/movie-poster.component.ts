import { Component, Input } from '@angular/core';
import { Movie } from '@core/models/interface/movies.interface';
import { UtilService } from '@shared/util/util.service';

@Component({
  selector: 'gml-movie-poster',
  standalone: false,
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.scss'
})
export class MoviePosterComponent {
  @Input() movies?: Movie[];

  constructor(private utilService: UtilService) {}

  getStars(voteAverage:number){
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }

  onMovieClick(movie: Movie) {
    this.utilService.viewDetailMovie(movie);
  }

}
