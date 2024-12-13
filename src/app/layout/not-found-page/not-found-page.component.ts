import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppTexts } from '@core/models/enums/app-text';
import { ErrorMessages } from '@core/models/enums/error-messages';
import { environment } from '@environments/environment';

@Component({
  selector: 'AVA-not-found-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  errorMessages = ErrorMessages;
  appTexts = AppTexts;
  public notFoundPageImgUrl = environment.notFoundPageImgUrl;

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
