import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, IonButton } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { AlertController } from '@ionic/angular/standalone';


// same boilerplate as usual
@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, IonButton
  ]
})





export class CastPage implements OnInit {


  // creating new cast and crew arrays again to hold the cast on the page
  castList: any[] = [];
  crewList: any[] = [];
  defaultMovieImageUrl: string = 'https://image.tmdb.org/t/p/w92';




  constructor(
    private movieService: MovieService,
    private pageRouter: Router,
    private alertController: AlertController
  ) {}





  ngOnInit() {
    // Check if a movie has been selected first - wil throw the usual errors if not
    if (this.movieService.currentMovieId === 0) {
      this.showNoCastAlert();
    } else {


      // Get the full cast and crew lists from the service - get everyone as we are showing all the cast etc.
      this.castList = this.movieService.currentCastList;
      this.crewList = this.movieService.currentCrewList;
    }
  }



  // throw another error if no movie is selected
  async showNoCastAlert() {
    const alert = await this.alertController.create({
      header: 'No Movie Selected',
      message: 'Please go to the Home page and select a movie first',
      buttons: [{
        text: 'Go Home',
        handler: () => {
          this.pageRouter.navigate(['/tabs-bar/home']);
        }
      }]
    });
    await alert.present();
  }

  goToMovie() {
    this.pageRouter.navigate(['/tabs-bar/movie', this.movieService.currentMovieId]);
  }



  // also include a button for going to home page
  goToHome() {
    this.pageRouter.navigate(['/tabs-bar/home']);
  }



  // final method to make actors clickable
  
  goToPerson(personId: number) {
    this.pageRouter.navigate(['/tabs-bar/person-detail', personId]);
}

}