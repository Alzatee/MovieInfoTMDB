import { Component, OnInit } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';
import { Movie, MoviesResponse } from '@core/models/interface/movies.interface';
import { TmdbService } from '@core/services/tmdb-service';

@Component({
  selector: 'gml-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {
  appTexts = AppTexts;
  movies: Movie[] = [];
  text = '';
  noMovie = '';
  
  currentPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;

  constructor( private tmdbService: TmdbService ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  searchHandleEvent(eventData: string): void {
    this.text = eventData;
    this.currentPage = 1;
    this.validateMovieRetrieval();
  }

  pageNumberChangeHandleEvent(eventData: number): void {
    this.currentPage = eventData;
    this.validateMovieRetrieval();
  }

  validateMovieRetrieval(): void {
    if (this.text) {
      this.loadSearchMovies();
    } else {
      this.loadMovies();
    }
  }

  loadSearchMovies(): void {
    this.tmdbService.searchMovie(this.text, this.currentPage).subscribe({
      next: (response: MoviesResponse) => {
        this.movies = [];
        this.movies = response.results;
        this.totalPages = response.total_pages;
        this.totalResults = response.total_results;

        if (this.movies.length == 0) {
          this.noMovie = '😌 No se encontró la pelicula';
        }
      },
      error: (error) => {
        const errorMessage = 'Error loading movies: ' + error.message;
        console.error(errorMessage);
      },
    });
  }

  loadMovies(): void {
    this.tmdbService.getMovieList(this.currentPage).subscribe({
      next: (response: MoviesResponse) => {
        this.movies = [];
        this.movies = response.results;
        this.totalPages = response.total_pages;
        this.totalResults = response.total_results;
      },
      error: (error) => {
        const errorMessage = 'Error loading movies: ' + error.message;
        console.error(errorMessage);
      }
    });
  }

}