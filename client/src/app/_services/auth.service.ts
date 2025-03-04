import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  moderatorPanelSubject = new BehaviorSubject<boolean>(false);
  moderatorPanelSubject$ = this.moderatorPanelSubject.asObservable();
}
