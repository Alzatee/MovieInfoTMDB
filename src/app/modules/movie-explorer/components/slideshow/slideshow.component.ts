import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@core/models/interface/movies.interface';
import { environment } from '@environments/environment';
import Swiper from 'swiper';

@Component({
  selector: 'gml-slideshow',
  standalone: false,
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies?: Movie[];
  mySwiper?: Swiper;
  movieImageUrl: string = environment.movieImageUrl;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('aqui', this.movies);
  }

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
