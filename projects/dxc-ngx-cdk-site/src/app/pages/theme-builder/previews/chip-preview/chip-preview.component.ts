import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-preview',
  templateUrl: './chip-preview.component.html'
})
export class ChipPreviewComponent implements OnInit {

  iconPath = "https://img.icons8.com/android/24/000000/twitter.png";

  constructor() { }

  ngOnInit(): void {
  }

}
