import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonThumbnail, IonSearchbar } from '@ionic/angular/standalone'; 


// import the components
import { MovieService } from '../services/movie.service'; // importing the movie service



// also need a router import to handle clicking on movies to redirect to the movie paage
import { Router } from '@angular/router';


// linking the components to the html page itself
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonThumbnail]
})



export class HomePage implements OnInit {

  // create some of the variables needed here
  studentNumber: string = 'G00472878';
  movies: any[] = []; // array object here to hold the movies, can iterate over this to create a list of movies on the home page


  // the 'file not found' image which can be returned if there's a error
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w92';




  // injects the MovieService service + the router import for redirect
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {

    this.movieService.getTrendingMovieList().subscribe({
      next: (response) => {this.movies = response.results; // calling the array

      },
      error: (err) => {
        console.error('Error fetching movies list from api:', err);
      }
    });
  }


  // create a method to redirect to a movie when the movie is clicked on this home page here, use the id number to locate
  goToMovie(id: number) {
    this.router.navigate(['/tabs-bar/movie', id]);
  }


  // Search bar functionality
  // Search for movies when you type in the search bar
  searchMovies(event: any) {

    // gets the text the user typed
    const query = event.target.value;

    // Only search if there are min. 3 characters typed
    if (query && query.length >= 3) {
      this.movieService.searchMovies(query).subscribe({
        next: (response) => {
          this.movies = response.results;
        },
        error: (err) => {
          console.error('Error searching movies, more letters needed:', err);
        }
      });
    }
  }

  // When search is cleared go back to trending movies - i.e. reset the home pages
  clearSearch() {
    this.movieService.getTrendingMovieList().subscribe({
      next: (response) => {
        this.movies = response.results;
      },
      error: (err) => {
        console.error('Error fetching trending movies, returning back to trending movies:', err);
      }
    });
  }


}