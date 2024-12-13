import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppTexts } from '@core/models/enums/app-text';
import { Movie, MoviesResponse } from '@core/models/interface/movies.interface';
import { TmdbService } from '@core/services/tmdb-service';
import { UtilService } from '@shared/util/util.service';

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
  pageSize: number = 20;
  totalPages: number = 1;
  totalResults: number = 0;

  constructor(private tmdbService: TmdbService, private utilService: UtilService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  searchHandleEvent(eventData: string): void {
    this.text = eventData;
    this.currentPage = 1;
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

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.validateMovieRetrieval();
      this.utilService.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.validateMovieRetrieval();
      this.utilService.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.validateMovieRetrieval();
      this.utilService.scrollToTop();
    }
  }

  getPageRange(): number[] {
    const range: number[] = [];
    const maxPagesToShow = this.currentPage >= 100 ? 3 : 5; // Controlar el número de páginas a mostrar según el tamaño numérico de la página.
  
    let startPage = Math.max(this.currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);
  
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }
  
    return range;
  }

}