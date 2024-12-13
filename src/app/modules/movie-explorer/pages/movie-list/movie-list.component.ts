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

  // Cache para almacenar películas cargadas
  loadedPages: Map<number, Movie[]> = new Map();

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    // Verificar si la página ya fue cargada
    if (this.loadedPages.has(this.currentPage)) {
      // Si la página ya está en el cache, simplemente la usamos
      this.movies = this.loadedPages.get(this.currentPage)!;
    } else {
      // Si no está en el cache, realizamos la solicitud
      this.tmdbService.getMovieList(this.currentPage).subscribe({
        next: (response: MoviesResponse) => {
          this.movies = response.results;
          this.totalPages = response.total_pages;
          this.totalResults = response.total_results;

          // Guardar la página en el cache
          this.loadedPages.set(this.currentPage, this.movies);
        },
        error: (error) => {
          const errorMessage = 'Error loading movies: ' + error.message;
          console.error(errorMessage);
        }
      });
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMovies();
      this.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
      this.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies();
      this.scrollToTop();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPageRange(): number[] {
    const range: number[] = [];
    const maxPagesToShow = 5; // Cuántas páginas mostrar
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