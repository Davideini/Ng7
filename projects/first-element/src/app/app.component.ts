import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-element';

  @Input() inputText: string;

  @Output() ontest = new EventEmitter();

  ngOnInit() {

    interval(1000).subscribe(next => this.ontest.emit(next));

  }

}
