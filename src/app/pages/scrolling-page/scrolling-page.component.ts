import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-page',
  templateUrl: './scrolling-page.component.html',
  styleUrls: ['./scrolling-page.component.scss']
})
export class ScrollingPageComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}
