import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandService {
  landSubject = new BehaviorSubject<number>(1);
  landSubject$ = this.landSubject.asObservable();

  constructor() {}
}
