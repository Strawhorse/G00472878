import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

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

  constructor() {

    // this puts the Ionic icons into the html page
    addIcons({ home, film, people, star });
  }

}