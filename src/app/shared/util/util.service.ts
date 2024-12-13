// Servicio util de funcionalidades comunes.
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppTexts } from '@core/models/enums/app-text';
import { ErrorMessages } from '@core/models/enums/error-messages';
import { Movie } from '@core/models/interface/movies.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  errorMessages = ErrorMessages;
  appTexts = AppTexts;

  constructor(private router: Router) { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewDetailMovie(movie: Movie) {
    this.router.navigate(['movie-explorer', 'movie-detail', movie.id]);
  }

  getStars(voteAverage:number) {
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);
  }

  openErrorModal(message: string): void {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        footer: `${this.errorMessages.ContactAnAdministrator}`,
        confirmButtonText: `${this.appTexts.NavigateToHome}`,
        allowOutsideClick: false
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['/']);
        }
      });
  }

}
