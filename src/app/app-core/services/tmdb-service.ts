import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getMovieList(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/now_playing?language=es-ES&page=${page}`);
  }
  
}