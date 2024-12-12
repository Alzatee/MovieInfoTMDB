import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'movie-explorer',
    loadChildren: () => import('./modules/movie-explorer/movie-explorer.module').then((m) => m.MovieExplorerModule),
  },
  { path: '', redirectTo: 'movie-explorer', pathMatch: 'full' },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' }
];