import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.page.html',
  styleUrls: ['./tabs-bar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabsBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
