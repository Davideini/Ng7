import { Injectable } from '@angular/core';
import { ObservableInput, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ElementsLibService {

  dispatcher = new BehaviorSubject<number>(1);

  constructor() { }
}
