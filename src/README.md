# Movie App
A mobile app built with Ionic and Angular that connects to The Movie Database (TMDB) API.
Submitting as part of semester 3 mobile apps course at ATU
Student Number: G00472878

## Main features of the app
- View trending movies on homepage
- Search for movies
- View movie details
- Search for cast & crew
- View cast and crew details

## API
- https://www.themoviedb.org

## Built With
- Ionic
- Angular
- Capacitor (small use)
- TMDB API
- a lot of stackoverflow + Ionic and Angular webdocs

Built on Azure Virtual Machine with ATU

## Progress

- Main page working now
- Create splash page to run when app starts (opting for the Angular splash page rather than use Capacitor for device specific use)
-  menu now working at the bottom, needed to reorder the routes to the pages, however
- menu bar at bottom
- student number moved to menu bar
- movies now clickable and can route over to the Movie menu tab to be viewed
- cached movie details fixed for Movie screen
- movies now clickable
- Favourites methods created for adding and removing
- search bar addedd
- movie alerts for when no movie found or with less than 3 characetrs in the search


...


## researching ionic functions ....
Caching the Movie Page
Ionic can do this, called Ion Router Outlet; by default caches pages. Need to use ionViewWillEnter instead of ngOnInit on pages we want to refresh when needed!!! Don't forget


