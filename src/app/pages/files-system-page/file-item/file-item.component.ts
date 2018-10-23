import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @HostBinding('class.on') hover = false;
  @Input() file: any;

  constructor() { }

  ngOnInit() {
  }


  @HostListener('mouseenter') mouseenter() {
    this.hover = true;
    console.log('mouseenter', this.file);
  }


  @HostListener('mouseleave') mouseleave() {
    this.hover = false;
    console.log('mouseleave', this.file);
  }



  @HostListener('mouseover') mouseover() {
    this.hover = true;
    console.log('mouseover', this.file);
  }


  @HostListener('mouseout') mouseout() {
    this.hover = false;
    console.log('mouseout', this.file);
  }


}
