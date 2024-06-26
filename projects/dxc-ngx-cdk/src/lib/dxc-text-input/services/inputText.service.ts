import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputTextService {

  constructor() { }

  public isDisabled: BehaviorSubject<any> = new BehaviorSubject(false);
  
  public setIsDisabled(value): void {
    this.isDisabled.next(value);
  }
}