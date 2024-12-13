import { Component, OnInit } from '@angular/core';
import { Movie, MoviesResponse } from '@core/models/interface/movies.interface';
import { TmdbService } from '@core/services/tmdb-service';

@Component({
  selector: 'gml-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  currentPage: number = 1;
  pageSize: number = 20;
  totalPages: number = 1;
  totalResults: number = 0;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.tmdbService.getMovieList(this.currentPage).subscribe({
      next: (response: MoviesResponse) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
        this.totalResults = response.total_results;  
      },
      error: (error) => {
        const errorMessage = 'Error loading characters: ' + error.message;
        console.error(errorMessage);
      }
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMovies();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies();
    }
  }

  // Método para obtener un rango de páginas a mostrar
  getPageRange(): number[] {
    const range: number[] = [];
    const maxPagesToShow = 5; // Cuántas páginas mostrar
    let startPage = Math.max(this.currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);

    // Si el rango excede el total de páginas, ajustamos el rango
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  }
}