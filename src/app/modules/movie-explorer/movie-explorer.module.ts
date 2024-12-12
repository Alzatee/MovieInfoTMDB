import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MovieExplorerRoutingModule } from './movie-explorer-routing.module';

@NgModule({
  declarations: [
    MovieSearchComponent,
    MovieListComponent,
    MovieDetailComponent,
    PaginationComponent
  ],
  imports: [
    MovieExplorerRoutingModule,
    SharedModule
  ]
})
export class MovieExplorerModule { }
