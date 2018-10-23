import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '', component: PagesComponent, children: [
    { path: 'scrolling', loadChildren: '../../../src/app/pages/scrolling-page/scrolling-page.module#ScrollingPageModule' },
    { path: 'files-system', loadChildren: '../../../src/app/pages/files-system-page/files-system-page.module#FilesSystemPageModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
