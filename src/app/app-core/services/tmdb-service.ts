import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '@environments/environment';
import { MoviesResponse } from '@core/models/interface/movies.interface';
import { MovieDetails } from '@core/models/interface/movie-details.interface';
import { Cast, Credits } from '@core/models/interface/credits.interface';

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

  getMovieDetailsById(id: string) {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}?language=es-ES`).pipe(
      catchError(err=> of(null))
    )
  }

  getMovieCredits(id:string):Observable<Cast[] | null>{
    return this.http.get<Credits>(`${this.baseUrl}/movie/${id}/credits?language=es-ES`).pipe(
      map(res=>res.cast),
      catchError(err=> of(null))
      )
  }
  
}