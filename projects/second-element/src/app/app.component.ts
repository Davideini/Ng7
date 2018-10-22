import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-element';
  @Input() inputText: string;

  @Output() test = new EventEmitter();

  ngOnInit() {

    interval(1000).subscribe(next => this.test.emit(next));

  }
}
