import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test-scrolling-item',
  templateUrl: './test-scrolling-item.component.html',
  styleUrls: ['./test-scrolling-item.component.scss']
})
export class TestScrollingItemComponent implements OnInit, OnDestroy {

  @Input() item: string;
  @Input() index: number;

  @HostBinding('class.color-0') get color0() { return !(this.index % 2); }
  @HostBinding('class.color-1') get color1() { return this.index % 2; }

  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit-${this.index}-${this.item}`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy-${this.index}`);
  }

}
