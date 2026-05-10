import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';





@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, IonButton
  ]
})




export class FavouritesPage implements OnInit {

  // get  favourites list
  favouriteMovies: any[] = [];
  defaultMovieImageUrl: string = 'https://image.tmdb.org/t/p/w92';


  // inject the movie service again and the router
  constructor(
    private movieService: MovieService,
    private pageRouter: Router
  ) {}






  //gets the favourites list from the service
  ngOnInit() {
    this.favouriteMovies = this.movieService.favouriteMovies;
  }




  // clicking a favourite movie brings you to its details
  goToMovie(id: number) {
    this.movieService.currentMovieId = id;
    this.pageRouter.navigate(['/tabs-bar/movie', id]);
  }




  // remove a movie directly from the favourites page
  // something a little extra
  removeFromFavourites(movieId: number) {
    this.movieService.removeMovieFromFavourites(movieId);
    this.favouriteMovies = this.movieService.favouriteMovies;
  }

}