import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonThumbnail, IonBadge } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { IonLabel } from "@ionic/angular/standalone";

import { AlertController } from '@ionic/angular/standalone'

// work here is to list the movie details based on the movie that the user cliocks on in the homepage


@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: true,


  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonButton,
    IonThumbnail
  ]
})



//update the main class and constructor to store the movie details
// I believe Angular does something under the hood, too, to cache movie details untgil a new movie is searched

export class MoviePage implements OnInit {


  // will use the any type here because different types of data are coming back

  movieDetails: any = null;
  castList: any[] = [];
  crewList: any[] = [];
  defaultMovieImageUrl: string = 'https://image.tmdb.org/t/p/w342';



  // I'm adding these imports to the constructor as I did in the home page as it will need routing which doesn't come in with the boilerplate
  constructor(
    private currentRoute: ActivatedRoute,
    private pageRouter: Router,
    private movieService: MovieService,
    private alertController: AlertController
  ) { }

  ngOnInit() {




    // Get the movie ID from the current URL
    const movieId = this.currentRoute.snapshot.paramMap.get('id');


    // check if the movie exists
    if (movieId) {

        // setting the default movie ID to avoid errors
      this.movieService.currentMovieId = +movieId;
      

      // get movie details using the ID
      // returns the any we have in movie.service.ts
      this.movieService.getIndividualMovieDetails(+movieId).subscribe({
        next: (response) => {
          this.movieDetails = response;
        },


        // error just in case
        error: (err) => {
          console.error('Error fetching movie details:', err);
        }
      });


      // Secondly, get the cast and crew using the same ID
      this.movieService.getMovieCredits(+movieId).subscribe({
        next: (response) => {
          this.castList = response.cast.slice(0, 10);
          this.crewList = response.crew.slice(0, 5);
        },
        error: (err) => {
          console.error('Error fetching cast and crew:', err);
        }
      });

    }

  }






  // lastly a method to return to the homepage if needed
  goToHomePage () {
    this.pageRouter.navigate(['/tabs-bar/home']);
  }


  // to route to the favourites page
  goToFavourites() {
    this.pageRouter.navigate(['/tabs-bar/favourites']);
  }

  // and the cast and crew page
  
  goToCastCrew() {
    this.pageRouter.navigate(['/tabs-bar/cast']);
  }




  // async methods for adding or removing movies from the favourites list

  async addToFavourites() {

    const message = this.movieService.addMovieToFavourites(this.movieDetails);
    const alert = await this.alertController.create({
      header: 'Favourites',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  

  
  async removeFromFavourites() {
    const message = this.movieService.removeMovieFromFavourites(this.movieDetails.id);
    const alert = await this.alertController.create({
      header: 'Favourites',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
