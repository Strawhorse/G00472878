import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'splash',
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
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'tabs-bar',
    loadComponent: () => import('./tabs-bar/tabs-bar.page').then( m => m.TabsBarPage)
  },
];
