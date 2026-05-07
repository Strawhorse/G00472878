import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'movie',
    loadComponent: () => import('./movie/movie.page').then( m => m.MoviePage)
  },
  {
    path: 'cast',
    loadComponent: () => import('./cast/cast.page').then( m => m.CastPage)
  },
  {
    path: 'favourites',
    loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
  },
];
