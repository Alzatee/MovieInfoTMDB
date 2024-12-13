import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AppTexts } from '@core/models/enums/app-text';
import { Movie } from '@core/models/interface/movies.interface';
import { environment } from '@environments/environment';
import { UtilService } from '@shared/util/util.service';
import Swiper from 'swiper';

@Component({
  selector: 'gml-slideshow',
  standalone: false,
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  appTexts = AppTexts;
  @Input() movies?: Movie[];
  mySwiper?: Swiper;
  movieImageUrl: string = environment.movieImageUrl;

  constructor(public utilService: UtilService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  onSlidePrev(): void {
    this.mySwiper?.slidePrev();
  }

  onSlideNext(): void {
    this.mySwiper?.slideNext();
  }

}
