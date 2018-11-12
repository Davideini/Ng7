import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { interval, observable, Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { ElementsLibService } from 'elements-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-element';

  @Input() inputText: string;

  @Output() test = new EventEmitter();
  @Output() ontest = new EventEmitter();
  // @Output() onTest = new EventEmitter();

  constructor(private svc: ElementsLibService) { }

  ngOnInit() {

    // interval(1000).pipe(take(100), tap(next => this.svc.dispatcher.next(next))).subscribe(next => this.test.emit(next));
    // interval(1000).subscribe(next => this.ontest.emit(next));
    // interval(1000).subscribe(next => this.onTest.emit(next));
    const a = (max) => new Observable(subject => {
      let count = 0;
      setInterval(() => {
        subject.next(count);
        if (max < count) {
          subject.error('fdksjdfskhj');
        }
        count++;
      }, 1000);
    });

    a(2).subscribe();
  }

}
