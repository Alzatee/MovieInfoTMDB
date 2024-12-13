import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@environments/environment';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {
  movieImageUrl: string = environment.movieImageUrl;

  transform(poster:string): string {
    if (poster) {
      return `${this.movieImageUrl}${poster}`;
    }else{
      return 'images/image-not-available.jpg';
    }
  }

}