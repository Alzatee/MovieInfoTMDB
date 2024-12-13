import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '@core/services/tmdb-service';

@Component({
  selector: 'gml-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  pelicula?: any;
  cast : any[] =[];
  // pelicula?: MovieDetails;
  // cast : Cast[] =[];
  
  constructor(private activatedRoute:ActivatedRoute, private tmdbService: TmdbService){}
  
  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;

    // combineLatest([

    //   this.tmdbService.peliculaDetalle(id),
    //   // this.tmdbService.peliculaCreditos(id)

    // ]).subscribe(([movie,cast])=>{

    //   if (movie === null || cast === null) {

    //     console.error('Error: La pelicula o el reparto no se encontraron');
    //     return;
        
    //   }

    //   this.pelicula= movie;
    //   this.cast = cast;


    // });

  }

  getStars(voteAverage:number) {
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }


  regresar(): void{
    window.history.back();
  }
}
