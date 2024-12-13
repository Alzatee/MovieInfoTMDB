import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppTexts } from '@core/models/enums/app-text';
import { ErrorMessages } from '@core/models/enums/error-messages';
import { Cast } from '@core/models/interface/credits.interface';
import { MovieDetails } from '@core/models/interface/movie-details.interface';
import { TmdbService } from '@core/services/tmdb-service';
import { environment } from '@environments/environment';
import { UtilService } from '@shared/util/util.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'gml-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  errorMessages = ErrorMessages;
  appTexts = AppTexts;
  pelicula?: MovieDetails;
  cast: Cast[] = [];
  movieImageUrl: string = environment.movieImageUrl;
  
  constructor(
    private activatedRoute:ActivatedRoute, 
    private tmdbService: TmdbService,
    public utilService: UtilService
  ) {}
  
  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;

    // Combinación de metodos Rxjs para traer información de ambos resultados.
    combineLatest([
      this.tmdbService.getMovieDetailsById(id),
      this.tmdbService.getMovieCredits(id)
    ]).subscribe(([movie, cast]) => {
      if (movie === null || cast === null) {
        this.utilService.openErrorModal(this.errorMessages.MovieCastError);
        console.error(this.errorMessages.MovieCastError);

        return;
      }

      this.pelicula = movie;
      this.cast = cast;
    });
  }

  regresar(): void{
    window.history.back();
  }
}
