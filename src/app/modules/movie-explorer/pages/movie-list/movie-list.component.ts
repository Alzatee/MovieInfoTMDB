import { Component, OnInit } from '@angular/core';
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
  movies: Movie[] = [];
  currentPage: number = 1;
  pageSize: number = 20;
  totalPages: number = 1;
  totalResults: number = 0;

  loadedPages: Map<number, Movie[]> = new Map();

  constructor(private tmdbService: TmdbService, private utilService: UtilService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    // Verificar si la página ya fue cargada y si está en caché usar dicha página, d elo contrario hacer la consulta.
    if (this.loadedPages.has(this.currentPage)) {
      this.movies = this.loadedPages.get(this.currentPage)!;
    } else {
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
      this.utilService.scrollToTop();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
      this.utilService.scrollToTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies();
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