import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesSystemPageComponent } from './files-system-page.component';
import { FileItemComponent } from './file-item/file-item.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FilesSystemPageComponent }]),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  declarations: [FilesSystemPageComponent, FileItemComponent]
})
export class FilesSystemPageModule { }
