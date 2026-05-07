import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone'; // import the components

import { MovieService } from '../services/movie.service'; // importing the movie service


// linking the components to the html page itself
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,     IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonThumbnail
  ]
})



export class HomePage implements OnInit {

  // create some of the variables needed here
  studentNumber: string = 'G00472878';
  movies: any[] = []; // array object here to hold the movies


  // the 'file not found' image which can be returned if there's a error
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w92';



  // injects the MovieService service
  constructor(private movieService: MovieService) {}

  ngOnInit() {

    this.movieService.getTrendingMovieList().subscribe({
      next: (response) => {this.movies = response.results; // calling the array

      },
      error: (err) => {
        console.error('Error fetching movies list from api:', err);
      }
    });
  }

}