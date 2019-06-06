import { Component } from '@angular/core';
import { Components } from './components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  components: Array<any>;
  constructor() {
     this.components = Components;
  }


  title = 'dxc-angular-cdk';

  checked = true;

  showAlert() {
    window.alert('Button1');
  }

  changeCheckBoxValue() {
    this.checked = !this.checked;
  }

  isRequired() {
    return true;
  }
}


