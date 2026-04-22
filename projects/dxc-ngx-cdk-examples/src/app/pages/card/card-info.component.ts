import { Component } from '@angular/core';

@Component({
    selector: 'card-info',
    templateUrl: './card-info.component.html',
    styleUrls: ['./card-info.component.scss'],
    standalone: false
})
export class CardInfoComponent {

  constructor()  {}
  iceCream = "../assets/images/ice-cream.jpg";
  twitterIcon = "../assets/images/twitter.svg";
  outlined = true;
  imageCover = true;

  onClick() {
    
  }
}
