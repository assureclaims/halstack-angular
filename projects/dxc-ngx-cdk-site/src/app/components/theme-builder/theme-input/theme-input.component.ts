import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { css } from 'emotion';
@Component({
  selector: 'tb-theme-input',
  templateUrl: './theme-input.component.html',
  styleUrls: ['./theme-input.component.scss']
})
export class ThemeInputComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  propertyName: string;

  @Input()
  propertyValue: string;

  @Input()
  tokenType: string;


  constructor() { }

  ngOnInit(): void {
    this.getDynamicStyle();
  }


  getDynamicStyle(){
    return css`
    .tBropertyContainer{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      margin: 7px 0;
    }

    .tbPropertyName{
      font: normal 13px Open Sans;
      color: #000000;
      width: 60%;
      line-height: 13px;
    }
    `;
  }

  makeReadable = (token:string) => token.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
  })

}
