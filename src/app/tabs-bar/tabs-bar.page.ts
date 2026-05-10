import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';


// need to add the import for the alert, it won't auto import; why can't we make this in Webstorm?

import { AlertController } from '@ionic/angular/standalone'

// get some icons for the bottom
import { home, film, people, star } from 'ionicons/icons';





@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.page.html',
  styleUrls: ['./tabs-bar.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})

// imports might be a bit exsessive but I'll see what I need



export class TabsBarPage {

// Add the stundent number variable here
  studentNumber: string = 'G00472878';

  constructor(private alertController: AlertController) {


    // this puts the Ionic icons into the html page
    addIcons({ home, film, people, star });
  }



  // method to show error, needs to be asyncbecause it's an observable, will get errors without doing this
  async showNoMovieAlert() {
    const alert = await this.alertController.create({
      header: 'No movie selected, I am afraid',
      message: 'Go to the Home page and select or search for a movie first',
      buttons: ['OK']
    });
    await alert.present();
  }

}