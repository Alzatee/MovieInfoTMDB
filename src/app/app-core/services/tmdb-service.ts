import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Movie, MoviesResponse } from '@core/models/interface/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getMovieList(page: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/now_playing?language=es-ES&page=${page}`);
  }

  searchMovie(text: string, page: number): Observable<MoviesResponse>  {
    return this.http.get<MoviesResponse>(`${this.baseUrl}/search/movie?query=${text}&language=es-ES&page=${page}`);
  }
  
}