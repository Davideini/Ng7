import { Component, OnInit, Renderer2 } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-files-system-page',
  templateUrl: './files-system-page.component.html',
  styleUrls: ['./files-system-page.component.scss']
})
export class FilesSystemPageComponent implements OnInit {

  files = [
    { name: 'test-file 1', type: 'file' },
    { name: 'test-file 2', type: 'file' },
    { name: 'test-file 31', type: 'file' },
    { name: 'test-file 4', type: 'file' },
    { name: 'test-file 5', type: 'file' },
    { name: 'test-file 6', type: 'file' },
    { name: 'test-file 7', type: 'file' },
    { name: 'test-file 8', type: 'file' },
    { name: 'test-folder 1', type: 'folder' },
    { name: 'test-folder 2', type: 'folder' },
    { name: 'test-folder 3', type: 'folder' }
  ];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
  }

  constructor(private randerer: Renderer2) { }

  ngOnInit() {
  }

  ended(event: CdkDragEnd) {
    this.randerer.setStyle(event.source.element.nativeElement, 'transform', 'translate3d(0, 0, 0px)');
    (event.source as any)._activeTransform = { x: 0, y: 0 };
    (event.source as any)._passiveTransform = { x: 0, y: 0 };
  }

}
