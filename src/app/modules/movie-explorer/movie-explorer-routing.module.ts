import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent
  },
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieExplorerRoutingModule {}