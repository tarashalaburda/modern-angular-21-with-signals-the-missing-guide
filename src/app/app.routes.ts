import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./pages/movie-details/movie-details').then((c) => c.MovieDetails),
  },
];
