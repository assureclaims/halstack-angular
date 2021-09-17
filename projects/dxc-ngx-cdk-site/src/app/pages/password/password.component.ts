import { Component, OnInit } from '@angular/core';
import { PasswordApiComponent } from 'src/app/components/examples/password/password-api/password-api.component';
import { PasswordExampleComponent } from 'src/app/components/examples/password/password-example/password-example.component';
import { Section } from 'src/app/model/sections';

@Component({
  selector: 'password',
  templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {

  headingMargin = {
    bottom: 'medium'
  }

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'password-api', component: PasswordApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'password-example', component: PasswordExampleComponent}
    );
  }

}