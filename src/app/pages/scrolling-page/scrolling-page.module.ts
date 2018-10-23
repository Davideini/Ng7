import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingPageComponent } from './scrolling-page.component';
import { RouterModule } from '@angular/router';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { TestScrollingItemComponent } from './test-scrolling-item/test-scrolling-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ScrollingPageComponent }]),
    ScrollDispatchModule
  ],
  declarations: [ScrollingPageComponent, TestScrollingItemComponent]
})
export class ScrollingPageModule { }
