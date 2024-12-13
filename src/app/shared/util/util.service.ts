// Servicio util de funcionalidades comunes.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@core/models/interface/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router) { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewDetailMovie(movie: Movie) {
    this.router.navigate(['movie-explorer', 'movie-detail', movie.id]);
  }

  getStars(voteAverage:number) {
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }

}
