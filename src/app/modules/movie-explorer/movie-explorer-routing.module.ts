import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
    {
        path: 'movie-list',
        component: MovieListComponent
    },
    { path: '', redirectTo: 'movie-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieExplorerRoutingModule {}