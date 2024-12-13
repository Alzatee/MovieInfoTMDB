import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MovieExplorerRoutingModule } from './movie-explorer-routing.module';

import { SeekerComponent } from './components/seeker/seeker.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { PosterPipe } from '@core/pipes/poster.pipe';

@NgModule({
  declarations: [
    SeekerComponent,
    SlideshowComponent,
    PaginationComponent,
    MoviePosterComponent,
    MovieListComponent,
    MovieDetailComponent,
    PosterPipe
  ],
  imports: [
    MovieExplorerRoutingModule,
    SharedModule
  ], 
  exports: [
    SeekerComponent
  ]
})
export class MovieExplorerModule { }
