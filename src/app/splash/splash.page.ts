import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

// Don't need these

// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';



// I didn't create this, this was boilerplate from using ionic on the command line to create pages
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent]
})

export class SplashPage implements OnInit {


  // inject in the router object to make the automatic redirect from this splash screen to the actual homescreen
  // 1.5 second delay
  constructor(private splashRouter: Router) {}

  ngOnInit() {


    // set a timer here to redirect to the splash screen
    // I think 1.5 seconds/1500 miliseconds is enough for this
    setTimeout(() => {
      this.splashRouter.navigate(['/home']);
    }, 1500);
  }



}
