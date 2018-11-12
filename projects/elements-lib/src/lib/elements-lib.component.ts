import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElementsLibService } from './elements-lib.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'lib-elements-lib',
  template: `
  <h1>Custom baruh {{val}}</h1>
    <h1>
      Dave's elements-lib works!
    </h1>

  `,
  styles: []
})
export class ElementsLibComponent implements OnInit, OnDestroy {
  private _isAlive = true;
  val: number;

  constructor(private svc: ElementsLibService) {

  }

  ngOnInit() {
    const s = this.svc.dispatcher
      .pipe(takeWhile(() => this._isAlive))
      .subscribe(next => this.val = next);

  }

  ngOnDestroy(): void {
    this._isAlive = false;
  }

}
