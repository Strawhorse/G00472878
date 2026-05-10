// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

// @Component({
//   selector: 'app-person-detail',
//   templateUrl: './person-detail.page.html',
//   styleUrls: ['./person-detail.page.scss'],
//   standalone: true,
//   imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
// })
// export class PersonDetailPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }





import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';





@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel
  ]
})






export class PersonDetailPage implements OnInit {

  // defaults again
  personDetails: any = null;
  defaultImageUrl: string = 'https://image.tmdb.org/t/p/w342';




  constructor(
    private currentRoute: ActivatedRoute,
    private pageRouter: Router,
    private movieService: MovieService
  ) {}






  ngOnInit() {
    // Get the person id # from the URL - slightly different syntax to standard JS
    const personId = this.currentRoute.snapshot.paramMap.get('id');



    if (personId) {
      this.movieService.getPersonDetails(+personId).subscribe({
        next: (response) => {
          this.personDetails = response;
        },
        error: (err) => {
          console.error('Error fetching person details, sorry:', err);
        }
      });
    }
  }



  // redirects


  // Go back to the cast page
  goToCast() {
    this.pageRouter.navigate(['/tabs-bar/cast']);
  }

  // Go back to the movie
  goToMovie() {
    this.pageRouter.navigate(['/tabs-bar/movie', this.movieService.currentMovieId]);
  }

}