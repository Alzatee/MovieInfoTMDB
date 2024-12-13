import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@core/models/interface/movies.interface';

@Component({
  selector: 'gml-movie-poster',
  standalone: false,
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.scss'
})
export class MoviePosterComponent {
  @Input() movies?: Movie[];

  constructor(private router: Router){}

  getStars(voteAverage:number){
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['movie-explorer', 'movie-detail', movie.id]);
  }

}
