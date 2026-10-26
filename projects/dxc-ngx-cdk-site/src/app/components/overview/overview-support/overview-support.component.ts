import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-overview-support',
    templateUrl: './overview-support.component.html',
    styleUrls: ['./overview-support.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OverviewSupportComponent implements OnInit {

  imgGithub: string;

  constructor() { }

  ngOnInit() {
    this.imgGithub = 'assets/img/github-logo.svg';
  }

}
