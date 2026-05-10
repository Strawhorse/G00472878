import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MovieService } from './services/movie.service';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})


// finally, needwed to call the favourites loading at start here
export class AppComponent {
  
  constructor(private movieService: MovieService) {
    this.initialiseMovieFavourites();
  }


  // and the method for loading the favouties list from local memory
  async initialiseMovieFavourites() {
    await this.movieService.loadFavourites();
  }
}
