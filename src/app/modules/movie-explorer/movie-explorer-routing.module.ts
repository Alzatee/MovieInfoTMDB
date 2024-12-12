import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';

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