


import { Routes } from '@angular/router';

export const routes: Routes = [

  // keep default path route and keep the splash page outside of the tabs because I don't want the menu bar showing when on the splash page
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage)
  },


  // tab bar at the bottom will hold all the other menu pages like below here
  {
    path: 'tabs-bar',
    loadComponent: () => import('./tabs-bar/tabs-bar.page').then(m => m.TabsBarPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage)
      },
      {

        // movie path now needs to accept an id number that will call the movie api
        path: 'movie/:id',
        loadComponent: () => import('./movie/movie.page').then(m => m.MoviePage)
      },
      {
        path: 'cast',
        loadComponent: () => import('./cast/cast.page').then(m => m.CastPage)
      },
      {
        path: 'favourites',
        loadComponent: () => import('./favourites/favourites.page').then(m => m.FavouritesPage)
      },

      // final route for the actor details page - ionic puts it by default outside this menu bar loop
      // a;so need to make sure to add the :id or it won't search
      {
        path: 'person-detail/:id',
        loadComponent: () => import('./person-detail/person-detail.page').then( m => m.PersonDetailPage)
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }

];





// retain old code for reference or in case I need to roll back

// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'splash',
//     pathMatch: 'full',
//   },
//   {
//     path: 'movie',
//     loadComponent: () => import('./movie/movie.page').then( m => m.MoviePage)
//   },
//   {
//     path: 'cast',
//     loadComponent: () => import('./cast/cast.page').then( m => m.CastPage)
//   },
//   {
//     path: 'favourites',
//     loadComponent: () => import('./favourites/favourites.page').then( m => m.FavouritesPage)
//   },
//   {
//     path: 'splash',
//     loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
//   },
//   {
//     path: 'tabs-bar',
//     loadComponent: () => import('./tabs-bar/tabs-bar.page').then( m => m.TabsBarPage)
//   },
// ];


