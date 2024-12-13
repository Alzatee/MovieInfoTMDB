import { Component, OnInit } from '@angular/core';
import { TmdbService } from '@core/services/tmdb-service';

@Component({
  selector: 'gml-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.loadMovies(1);
  }

  loadMovies(page: number): void {
    this.tmdbService.getMovieList(page).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error) => {
        const errorMessage = 'Error loading characters: ' + error.message;
        console.error(errorMessage);
        // openErrorModal(this.errorMessages.GeneralErrorMessage);
      }
    });
  }
}
