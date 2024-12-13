import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from '@core/models/interface/credits.interface';
import Swiper from 'swiper';

@Component({
  selector: 'gml-cast-slide-show',
  standalone: false,
  templateUrl: './cast-slide-show.component.html',
  styleUrl: './cast-slide-show.component.scss'
})
export class CastSlideShowComponent implements AfterViewInit {

  @Input() cast?: Cast[];
  
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
